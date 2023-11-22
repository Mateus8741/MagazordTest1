import React from 'react';
import { Text, View } from 'react-native';

import { Logo, Screen } from '@shared';

export function StoreHomeScreen() {
  const variantType = 'store';

  return (
    <Screen>
      <View className="flex-1 px-5">
        <Logo appName="Store" type={variantType} />
        <Text>StoreHomeScreen</Text>
      </View>
    </Screen>
  );
}
