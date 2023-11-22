import axios from 'axios';

const apiConfig = axios.create({
  baseURL:
    'https://api.weatherapi.com/v1/search.json?key=f08e87ef7605415fbf9233029232111&q=',
});

export function getWeather(city: string) {
  return apiConfig.get(city);
}
