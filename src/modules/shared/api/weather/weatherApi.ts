import { useState } from 'react';

import { Root2 } from '@dtos';
import { useQuery } from '@tanstack/react-query';

import { getCity, getWeatherData } from './apiConfig';

export function useLocationSearch() {
  const [city, setCity] = useState<string>('');

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ['weather', city],
    queryFn: () => getCity(city),
    retry: false,
    staleTime: 20000,
  });

  return { data, setCity, isLoading, isFetching, isError };
}

export function useWeatherData() {
  const [selectedCity, setSelectedCity] = useState<Root2>({} as Root2);

  const { data, isLoading, isFetching, isError } = useQuery({
    queryKey: ['weather', selectedCity?.name, selectedCity?.region],
    queryFn: () => getWeatherData(selectedCity?.name, selectedCity?.region),
    retry: false,
    staleTime: 20000,
  });

  return {
    data,
    setSelectedCity,
    selectedCity,
    isLoading,
    isFetching,
    isError,
  };
}
