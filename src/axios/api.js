import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem('@token');
    return token;
  } catch (error) {
    console.log('Erro ao obter o token:', error);
    return null;
  }
};

export const api = axios.create({
  baseURL: 'http://10.0.0.101:3333/api',
  headers: async () => ({
    Authorization: `Bearer ${await getToken()}`,
  }),
});

api.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.log(error);
    throw error;
  },
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    throw error;
  },
);
