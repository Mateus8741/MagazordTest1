import React from 'react';
import { ActivityIndicator, View } from 'react-native';

export function Loading() {
  return (
    <View className="flex-1 items-center justify-center">
      <ActivityIndicator size="large" className="text-black dark:text-white" />
    </View>
  );
}
