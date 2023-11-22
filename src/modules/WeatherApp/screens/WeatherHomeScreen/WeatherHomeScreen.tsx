import React from 'react';
import { View } from 'react-native';

import { Logo, Screen, TextInput, useWeather } from '@shared';
import { SearchBox } from '@weatherComp';

export function WeatherHomeScreen() {
  const [city, setCity] = React.useState<string>('');

  const variantType = 'weather';

  const { data } = useWeather(city);

  return (
    <Screen>
      <Logo appName="Weather" type={variantType} />

      <View className="px-5">
        <TextInput
          onAddTask={text => setCity(text)}
          placeholder="Faça uma busca..."
          iconName="search"
          type={variantType}
        />

        <SearchBox data={data?.data} onPress={item => console.log(item)} />
      </View>

      <View className="flex-1 px-5 justify-center items-center">
        {/* <WeatherView data={data} /> */}
      </View>
    </Screen>
  );
}
