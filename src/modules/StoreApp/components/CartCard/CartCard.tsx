import React from 'react';
import { Image, Text, View } from 'react-native';

import { CartCount } from '../CartCount/CartCount';

export function CartCard() {
  return (
    <View className="flex flex-row items-center rounded-md shadow-md bg-white">
      <View className="h-30 p-2 mr-2 rounded-md">
        <Image
          className="w-28 h-28 rounded-lg"
          source={{ uri: 'https://picsum.photos/200/300' }}
        />
      </View>

      <View className="flex-1 py-2 pr-4 justify-between">
        <View className="flex-grow mb-8">
          <Text className="text-lg font-bold">nome do produto</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-green-600 font-bold">R$ 19,90</Text>
          <CartCount />
        </View>
      </View>
    </View>
  );
}
