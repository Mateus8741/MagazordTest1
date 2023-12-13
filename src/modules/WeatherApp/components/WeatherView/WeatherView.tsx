import React from 'react';
import { Image, Text, View, useColorScheme } from 'react-native';

import { Root } from '@dtos';
import IconFooter from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface Props {
  data: Root;
}

export function WeatherView({ data }: Props) {
  const scheme = useColorScheme();

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
            {data?.location?.name},
          </Text>

          <Text className="text-xl ml-2 font-regular text-center dark:text-white">
            {data?.location?.country}
          </Text>
        </View>

        <Image
          source={{ uri: 'https:' + data?.current?.condition?.icon }}
          className="w-36 h-36"
          resizeMode="contain"
        />

        <View className="flex-row mt-5">
          <Text className="text-6xl font-bold text-center dark:text-white">
            {data?.current?.temp_c}
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
            {data?.current?.wind_kph} km/h
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
            {data?.current?.humidity}%{' '}
          </Text>
        </View>

        <View className="bg-white/5 rounded-md flex-row p-2 items-center justify-center">
          <Icon
            name="cloud"
            size={24}
            color={colorIcons()}
            style={{ marginRight: 10 }}
          />
          <Text className="text-base font-bold text-center dark:text-white">
            {data?.current?.cloud}%{' '}
          </Text>
        </View>
      </View>
    </View>
  );
}
