import React from 'react';
import { Text, View } from 'react-native';

import { Logo, Screen, TextInput } from '@shared';

export function WeatherHomeScreen() {
  const variantType = 'weather';

  function handleFindCity(city: string) {
    console.log(city);
  }

  return (
    <Screen>
      <View className="flex-1 px-5 bg-white dark:bg-gray-900">
        <Logo appName="Weather" type={variantType} />

        <TextInput
          onAddTask={text => handleFindCity(text)}
          placeholder="Faça uma busca..."
          iconName="search"
          type={variantType}
        />
        <Text>WeatherHomeScreen</Text>
      </View>
    </Screen>
  );
}
