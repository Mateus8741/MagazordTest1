import { apiConfigCurrent, apiConfigSearch } from './apiConfig';

export function getCity(city: string) {
  return apiConfigSearch.get(city);
}

export function getWeatherData(city: string, region: string) {
  return apiConfigCurrent.get(city + ' ' + region);
}

export function getGeoWeatherData(lat: number | null, long: number | null) {
  return apiConfigCurrent.get(`lat=${lat}&lon=${long}`);
}
