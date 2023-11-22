import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { Screen, customTransition, formatMoney, useAppSafeArea } from '@shared';
import { Header } from '@storeComp';
import Animated, { SlideInDown } from 'react-native-reanimated';

import { AppScreenProps } from '@routes';

export function DetailsScreen({ route }: AppScreenProps<'DetailsScreen'>) {
  const { data } = route.params;

  const { top } = useAppSafeArea();

  const formatedMoney = formatMoney(data.price);

  return (
    <>
      <Header title="Store" goBack />

      <Screen scrollable>
        <View
          className="flex-1 bg-white dark:bg-gray-900 w-full px-5 overflow-hidden"
          style={{
            paddingTop: top,
          }}>
          <Animated.Image
            source={{ uri: data.image }}
            className="h-80 -m-5"
            sharedTransitionTag={`image-${data.image}`}
            sharedTransitionStyle={customTransition}
            resizeMode="contain"
          />

          <Animated.View
            className="flex-1 -mx-5 bg-gray-900 dark:bg-white rounded-t-3xl p-5"
            entering={SlideInDown.delay(300 * data.id)}>
            <View className="mb-3">
              <Text className="text-lg font-bold text-white dark:text-gray-900">
                {data.title}
              </Text>

              <Text className="text-base font-normal text-zinc-300 dark:text-zinc-700">
                {data.rating.rate} ⭐️
              </Text>
            </View>

            <Text className="text-base font-normal text-zinc-300 dark:text-zinc-700 mb-3">
              {data.description}
            </Text>

            <Text className="text-base font-normal text-zinc-300 dark:text-zinc-700">
              {formatedMoney} + impostos
            </Text>

            <TouchableOpacity className="bg-green-500 dark:bg-green-600 rounded-lg px-5 py-3 mt-5 items-center">
              <Text className="text-lg font-bold text-white dark:text-gray-900">
                Comprar
              </Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Screen>
    </>
  );
}
