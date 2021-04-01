import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { API_URL } from '../config/constants';

const authAxios = axios.create({
  baseURL: API_URL,
});

authAxios.interceptors.request.use(async (config) => {
  const token = await SecureStore.getItemAsync('token');
  config.headers.Authorization = token;
  return config;
}, (error) => Promise.reject(error));

// Unprotected Routes
export const login = (email, password) => axios.post(`${API_URL}/auth/signin`, {
  email,
  password,
});

export const register = (userData) => axios.post(`${API_URL}/auth/signup`, userData);

// Protected Routes
export const me = () => authAxios.get('/auth/me');
