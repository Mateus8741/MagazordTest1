import React, { useEffect } from 'react';
import { View } from 'react-native';

import Geolocation from '@react-native-community/geolocation';
import NetInfo from '@react-native-community/netinfo';
import {
  Logo,
  Screen,
  TextInput,
  useGetLatLong,
  useLocationSearch,
  useToastService,
  useWeatherData,
} from '@shared';
import { Loading, SearchBox, WeatherView } from '@weatherComp';

export function WeatherHomeScreen() {
  const variantType = 'weather';

  const { showToast } = useToastService();

  const { dataGeo } = useGetLatLong();

  const { data, setCity } = useLocationSearch();

  const {
    data: weather,
    setSelectedCity,
    selectedCity,
    show,
    setShow,
    isFetching,
    isError,
  } = useWeatherData();

  Geolocation.setRNConfiguration({
    skipPermissionRequests: false,
    authorizationLevel: 'whenInUse',
  });

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected) {
        showToast({
          message:
            'Você está sem conexão com a internet ☹️, por favor verifique sua conexão e tente novamente.',
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, [showToast]);

  if (isError && selectedCity.name !== undefined) {
    showToast({
      message: `Não foi possível encontrar a cidade ${selectedCity.name}`,
    });
  }

  return (
    <Screen scrollable>
      <Logo appName="Weather" type={variantType} />

      <View className="px-5">
        <TextInput
          onAddTask={text => {
            setCity(text);
            setShow(true);
          }}
          placeholder="Faça uma busca..."
          iconName="search"
          type={variantType}
        />

        <SearchBox
          data={data?.data}
          onPress={item => {
            setSelectedCity(item);
            console.log(item);
            setShow(false);
          }}
          show={show}
        />
      </View>

      <View className="flex-1 px-5 justify-center items-center">
        {weather?.data === undefined ? (
          <WeatherView data={dataGeo} />
        ) : isFetching ? (
          <Loading />
        ) : (
          <WeatherView data={weather?.data} />
        )}
      </View>
    </Screen>
  );
}
