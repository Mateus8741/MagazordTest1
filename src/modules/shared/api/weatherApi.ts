import { useQuery } from '@tanstack/react-query';

import { getWeather } from './apiConfig';

export function useWeather(city: string) {
  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ['weather', city],
    queryFn: () => getWeather(city),
  });

  return { data, isLoading, isFetching, isError };
}
