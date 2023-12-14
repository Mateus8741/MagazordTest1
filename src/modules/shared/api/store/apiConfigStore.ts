import { BASE_URL_FAKE_STORE } from '@env';
import axios from 'axios';

export const apiConfigStore = axios.create({
  baseURL: BASE_URL_FAKE_STORE,
});
