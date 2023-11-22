import axios from 'axios';

export const apiConfigStore = axios.create({
  baseURL: 'https://fakestoreapi.com',
});
