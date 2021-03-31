import axios from 'axios';
import { API_URL } from '../config/constants';

export const login = (email, password) => axios.post(`${API_URL}/auth/signin`, {
  email,
  password,
});

export const register = (userData) => axios.post(`${API_URL}/auth/signup`, userData);
