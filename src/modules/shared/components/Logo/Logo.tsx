import React from 'react';
import { Text, View } from 'react-native';

import { useAppSafeArea } from '../../hooks/useAppSafeArea';

interface LogoProps {
  name: string;
}

export function Logo({ name }: LogoProps) {
  const { top } = useAppSafeArea();

  return (
    <View className="flex-row pb-4 justify-center" style={{ marginTop: top }}>
      <Text className="text-5xl italic font-bold dark:text-blue-700">
        {name}
      </Text>
      <Text className="text-5xl italic text-blue-700 font-bold dark:text-white">
        App
      </Text>
    </View>
  );
}
