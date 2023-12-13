import { apiConfigCurrent, apiConfigSearch } from './apiConfig';

export function getCity(city: string) {
  return apiConfigSearch.get(city);
}

export function getWeatherData(city: string, region: string) {
  return apiConfigCurrent.get(city + ' ' + region);
}
