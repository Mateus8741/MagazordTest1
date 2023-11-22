import axios from 'axios';

const apiConfig = axios.create({
  baseURL:
    'https://api.weatherapi.com/v1/search.json?key=f08e87ef7605415fbf9233029232111&q=',
});

const apiConfigCity = axios.create({
  baseURL:
    'https://api.weatherapi.com/v1/current.json?key=f08e87ef7605415fbf9233029232111&q=',
});

export function getCity(city: string) {
  return apiConfig.get(city);
}

export function getWeatherData(city: string, region: string) {
  return apiConfigCity.get(
    `https://api.weatherapi.com/v1/current.json?key=f08e87ef7605415fbf9233029232111&q=${city} ${region}`,
  );
}
