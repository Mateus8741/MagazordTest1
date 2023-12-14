import React from 'react';
import { Image, Text, View } from 'react-native';

export function CartCard() {
  return (
    <View className="flex flex-row items-center rounded-md shadow-md bg-white">
      <View className="h-30 p-2 bg-gray-100 mr-2 rounded-md">
        <Image
          className="w-20 h-20 rounded-lg"
          source={{ uri: 'https://picsum.photos/200/300' }}
        />
      </View>

      <View className="flex-1 py-2 pr-4 justify-between">
        <View className="flex-grow">
          <Text>nome do produto</Text>
          <Text>modelo do produto</Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text>preço</Text>
          <Text>quantidade</Text>
        </View>
      </View>
    </View>
  );
}
