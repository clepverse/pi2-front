import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { createContext, useContext, useEffect, useState } from 'react';

import { api } from '../axios/api';

const Context = createContext({});

export function useAuth() {
  const context = useContext(Context);

  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    (async () => {
      try {
        const storagedToken = await AsyncStorage.getItem('@token');

        if (storagedToken) {
          await api.get('/user/me').then((response) => {
            setUser(response.data.user);
            console.log({ response: response.data });
          });
        }
      } catch (error) {
        setUser(null);

        await AsyncStorage.removeItem('@user');
        await AsyncStorage.removeItem('@token');

        console.log(error);
      }
    })();
  }, []);

  async function signIn(email, password) {
    try {
      const response = await api.post('/user/login', {
        email,
        password,
      });

      const { user, token } = response.data;

      await AsyncStorage.setItem('@user', JSON.stringify(user));
      await AsyncStorage.setItem('@token', token);

      setUser(user);

      api.defaults.headers['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.log(error);
    }
  }

  // async function signUp(name, email, password, password_confirmation) {
  //   try {
  //     const response = await api.post('user/signup', {
  //       name,
  //       email,
  //       password,
  //       password_confirmation,
  //     });

  //     setUser(response.data.user);

  //     await AsyncStorage.setItem('@user', JSON.stringify(response.data?.user));
  //     await AsyncStorage.setItem('@token', response.data?.token);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  async function signOut() {
    setUser(null);

    await AsyncStorage.removeItem('@user');
    await AsyncStorage.removeItem('@token');
  }

  return (
    <Context.Provider
      value={{
        isAuthenticated,
        user,
        signIn,
        // signUp,
        signOut,
      }}
    >
      {children}
    </Context.Provider>
  );
}
