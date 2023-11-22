import { useQuery } from '@tanstack/react-query';

import { getCity, getWeatherData } from './apiConfig';

export function useLocationSearch(city: string) {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ['weather', city],
    queryFn: () => getCity(city),
  });

  return { data, isLoading, isFetching, isError };
}

export function useWeatherData(city: string, region: string) {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ['weather', city, region],
    queryFn: () => getWeatherData(city, region),
  });

  return { data, isLoading, isFetching, isError };
}
