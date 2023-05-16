import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { createContext, useContext, useEffect, useState } from 'react';

import api from '../axios/api';
import axios from 'axios';

const Context = createContext({});

export function useAuth() {
  const context = useContext(Context);

  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@user');
      const storagedToken = await AsyncStorage.getItem('@token');

      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
        setIsAuthenticated(true);
      }
    }

    loadStorageData();
  }, []);

  async function signIn(email, password) {
    try {
      const response = await axios.post(
        'http://10.0.0.101:3333/api/user/login',
        {
          email,
          password,
        },
      );

      setUser(response.data?.user);
      setIsAuthenticated(true);

      await AsyncStorage.setItem('@user', JSON.stringify(response.data?.user));
      await AsyncStorage.setItem('@token', response.data?.token);

      api.defaults.headers['Authorization'] = `Bearer ${response.data?.token}`;
    } catch (error) {
      console.log(error);
    }
  }

  async function signUp(name, email, password, password_confirmation) {
    try {
      const response = await api.post('user/signup', {
        name,
        email,
        password,
        password_confirmation,
      });

      setUser(response.data?.user);
      setIsAuthenticated(true);

      await AsyncStorage.setItem('@user', JSON.stringify(response.data?.user));
      await AsyncStorage.setItem('@token', response.data?.token);
    } catch (error) {
      console.log(error);
    }
  }

  async function signOut() {
    setUser(null);
    setIsAuthenticated(false);

    await AsyncStorage.removeItem('@user');
    await AsyncStorage.removeItem('@token');
  }

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        user,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </Context.Provider>
  );
}
