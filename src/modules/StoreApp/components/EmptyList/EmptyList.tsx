import React from 'react';
import { Text, View } from 'react-native';

export function EmptyList() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg font-bold text-gray-900 dark:text-white">
        Nem um produto encontrado
      </Text>
    </View>
  );
}
