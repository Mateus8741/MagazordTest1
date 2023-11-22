import React from 'react';
import { View } from 'react-native';

import { Root2 } from '@dtos';
import {
  Logo,
  Screen,
  TextInput,
  useLocationSearch,
  useWeatherData,
} from '@shared';
import { SearchBox, WeatherView } from '@weatherComp';

export function WeatherHomeScreen() {
  const [city, setCity] = React.useState<string>('');
  const [selectedCity, setSelectedCity] = React.useState<Root2>({} as Root2);
  const [show, setShow] = React.useState<boolean>(false);

  const variantType = 'weather';

  const { data } = useLocationSearch(city);

  const { data: weather } = useWeatherData(
    selectedCity.name,
    selectedCity.region,
  );

  console.log('clima', weather?.data);

  return (
    <Screen>
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
            setShow(false);
          }}
          show={show}
        />
      </View>

      <View className="flex-1 px-5 justify-center items-center">
        <WeatherView data={weather?.data} />
      </View>
    </Screen>
  );
}
