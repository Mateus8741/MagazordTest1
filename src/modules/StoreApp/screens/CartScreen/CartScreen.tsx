import React from 'react';
import { View } from 'react-native';

import { Screen } from '@shared';
import { CartCard, CartHeader } from '@storeComp';

export function CartScreen() {
  return (
    <Screen>
      <CartHeader />
      <View className="flex-1 p-5">
        <CartCard />
      </View>
    </Screen>
  );
}
