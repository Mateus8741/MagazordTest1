import React from 'react';
import { View } from 'react-native';

import { Logo, Screen, TextInput } from '@shared';
import { WeatherView } from '@weatherComp';

export function WeatherHomeScreen() {
  const variantType = 'weather';

  function handleFindCity(city: string) {
    console.log(city);
  }

  const data = {
    id: 1,
    city: 'São Paulo',
    country: 'BR',
    weather: 'sunny',
    temperature: 25,
  };

  return (
    <Screen>
      <Logo appName="Weather" type={variantType} />

      <View className="px-5">
        <TextInput
          onAddTask={text => handleFindCity(text)}
          placeholder="Faça uma busca..."
          iconName="search"
          type={variantType}
        />
      </View>

      <View className="flex-1 px-5 justify-center items-center">
        <WeatherView data={data} />
      </View>
    </Screen>
  );
}
