import React from 'react';
import { Text, View } from 'react-native';

import { Logo, Screen } from '@shared';

export function WeatherHomeScreen() {
  return (
    <Screen>
      <View className="flex-1 px-5 bg-white dark:bg-gray-900">
        <Logo name="Weather" />

        <Text>WeatherHomeScreen</Text>
      </View>
    </Screen>
  );
}
