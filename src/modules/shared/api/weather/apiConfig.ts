import { API_KEY, BASE_URL_CURRENT, BASE_URL_SEARCH } from '@env';
import axios from 'axios';

const URL_SEARCH = `${BASE_URL_SEARCH}key=${API_KEY}&q=`;

const URL_CURRENT = `${BASE_URL_CURRENT}key=${API_KEY}&q=`;

export const apiConfigSearch = axios.create({
  baseURL: URL_SEARCH,
});

export const apiConfigCurrent = axios.create({
  baseURL: URL_CURRENT,
});
