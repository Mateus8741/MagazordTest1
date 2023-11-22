import React from 'react';
import { Text, View } from 'react-native';

import { Logo, Screen, UseStoreApi } from '@shared';

export function StoreHomeScreen() {
  const variantType = 'store';

  const { data } = UseStoreApi('/products');

  console.log(data?.data[0]);

  return (
    <Screen>
      <View className="flex-1 px-5">
        <Logo appName="Store" type={variantType} />
        <Text>StoreHomeScreen</Text>

        <View className="flex-wrap flex-row justify-between">
          {/* <CardShop /> */}
        </View>
      </View>
    </Screen>
  );
}
