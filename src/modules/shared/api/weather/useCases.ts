import { useEffect, useState } from 'react';

import { Root, Root2 } from '@dtos';
import Geolocation from '@react-native-community/geolocation';
import { useQuery } from '@tanstack/react-query';

import { getCity, getGeoWeatherData, getWeatherData } from './weatherServices';

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
  const [show, setShow] = useState<boolean>(false);

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
    show,
    setShow,
    isLoading,
    isFetching,
    isError,
  };
}

export function useGetLatLong() {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const [dataGeo, setDataGeo] = useState<Root>({} as Root);

  // Geolocation.getCurrentPosition(
  //   position => {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  //   },
  //   error => {
  //     console.log(error);
  //   },
  //   { enableHighAccuracy: true, timeout: 500, maximumAge: 10 },
  // );

  useEffect(() => {
    // Geolocation.getCurrentPosition(
    //   position => {
    //     setLatitude(position.coords.latitude);
    //     setLongitude(position.coords.longitude);
    //   },
    //   error => {
    //     console.log(error);
    //   },
    //   { enableHighAccuracy: true, timeout: 5000, maximumAge: 10000 },
    // );

    const watchId = Geolocation.watchPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 5000, maximumAge: 10000 },
    );

    const func = getGeoWeatherData(latitude, longitude);

    func.then(res => {
      setDataGeo(res.data);
    });

    return () => Geolocation.clearWatch(watchId);
  }, [latitude, longitude]);

  // const { data } = useQuery({
  //   queryKey: ['weathergeo', latitude, longitude],
  //   queryFn: () => getGeoWeatherData(latitude, longitude),
  //   retry: false,
  //   staleTime: 20000,
  //   refetchInterval: 10000,
  //   enabled: !!latitude && !!longitude,
  // });

  console.log('larlong', latitude, longitude);
  console.log('dataGeo', dataGeo);

  return { dataGeo };
}
