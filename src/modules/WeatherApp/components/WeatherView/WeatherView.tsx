import React from 'react';
import { Text, View, useColorScheme } from 'react-native';

import IconFooter from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  data: {
    weather: string;
    temperature: number;
    city: string;
    country: string;
  };
}

export function WeatherView({
  data: { weather, temperature, city, country },
}: Props) {
  const scheme = useColorScheme();

  function switchWeatherIcon() {
    switch (weather) {
      case 'cloud':
        return 'wb-cloudy';
      case 'sunny':
        return 'sunny';
      case 'cloudy-snowing':
        return 'wb-cloudy';
      case 'wb-cloudy':
        return 'wb-cloudy';
      case 'wb-cloudy':
        return 'wb-cloudy';
      default:
        return 'wb-cloudy';
    }
  }

  function colorIcons() {
    if (scheme === 'dark') {
      return 'white';
    } else {
      return 'black';
    }
  }

  return (
    <View>
      <View className="flex-col flex-1 items-center justify-center">
        <View className="flex-row items-end justify-center mb-6">
          <Text className="text-2xl font-bold text-center dark:text-white">
            {city},
          </Text>

          <Text className="text-xl ml-2 font-regular text-center dark:text-white">
            {country}
          </Text>
        </View>

        <Icon
          name={switchWeatherIcon()}
          size={150}
          color="white"
          style={{ marginRight: 10 }}
        />

        <View className="flex-row mt-5">
          <Text className="text-6xl font-bold text-center dark:text-white">
            {temperature}
          </Text>

          <Text className="text-6xl ml-2 font-regular text-center dark:text-white">
            °C
          </Text>
        </View>
      </View>

      <View className="mb-6 flex-row justify-between gap-x-4">
        <View className="bg-white/5 rounded-md flex-row p-2 items-center justify-center">
          <IconFooter
            name="weather-windy"
            size={24}
            color={colorIcons()}
            style={{ marginRight: 10 }}
          />
          <Text className="text-base font-bold text-center dark:text-white">
            22km/h
          </Text>
        </View>

        <View className="bg-white/5 rounded-md flex-row p-2 items-center justify-center">
          <IconFooter
            name="water"
            size={24}
            color={colorIcons()}
            style={{ marginRight: 10 }}
            className="text-white"
          />
          <Text className="text-base font-bold text-center dark:text-white">
            23%
          </Text>
        </View>

        <View className="bg-white/5 rounded-md flex-row p-2 items-center justify-center">
          <Icon
            name="sunny"
            size={24}
            color={colorIcons()}
            style={{ marginRight: 10 }}
          />
          <Text className="text-base font-bold text-center dark:text-white">
            06:06 AM
          </Text>
        </View>
      </View>
    </View>
  );
}
