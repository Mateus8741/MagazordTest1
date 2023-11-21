import React from 'react';
import { Text, View } from 'react-native';

import { Logo } from '../components/Logo/Logo';
import { TextInput } from '../components/TextInput/TextInput';

export function HomeScreen() {
  return (
    <View className="flex-1 px-5 bg-white dark:bg-gray-900">
      <Logo />

      <TextInput />

      <Text>HomeScreen</Text>
    </View>
  );
}
