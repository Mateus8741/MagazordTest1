import { API_KEY, BASE_URL_CURRENT, BASE_URL_SEARCH } from '@env';
import axios from 'axios';

const URL_SEARCH = `${BASE_URL_SEARCH}key=${API_KEY}&q=`;

const URL_CURRENT = `${BASE_URL_CURRENT}key=${API_KEY}&q=`;

const apiConfig = axios.create({
  baseURL: URL_SEARCH,
});

const apiConfigCity = axios.create({
  baseURL: URL_CURRENT,
});

export function getCity(city: string) {
  return apiConfig.get(city);
}

export function getWeatherData(city: string, region: string) {
  return apiConfigCity.get(city + ' ' + region);
}
