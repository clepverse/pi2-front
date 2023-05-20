import axios from 'axios';

import AsyncStorage from '@react-native-async-storage/async-storage';

export const api = axios.create({
  baseURL: 'http://10.0.0.101:3333/',
});

const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('@token');
    return token;
  } catch (error) {
    console.log('Erro ao obter o token:', error);
    return null;
  }
};

api.interceptors.request.use(async (config) => {
  try {
    const token = await getToken();
    if (token && token.trim()) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    console.log('Erro ao cabeçalho da requisição:', error);
    return config;
  }
});

axios.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    console.log(error);
    throw error;
  },
);
