import React from 'react';
import { Image, Text, View } from 'react-native';

export function CardShop() {
  return (
    <View className="h-[170px] w-[170px] bg-gray-900 dark:bg-white rounded-lg overflow-hidden mb-6">
      <Image
        source={{ uri: 'https://picsum.photos/200/300' }}
        className="flex-1"
        resizeMode="cover"
      />
      <View className="px-3 py-1 justify-center bg-transparent">
        <Text className="text-xl font-bold text-white dark:text-gray-900">
          Teclado
        </Text>
        <Text className="text-base font-normal text-zinc-300 dark:text-zinc-700">
          R$ 99,99
        </Text>
      </View>
    </View>
  );
}
