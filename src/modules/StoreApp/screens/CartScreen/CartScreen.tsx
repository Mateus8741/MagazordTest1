import React from 'react';
import { Text, View } from 'react-native';

import { Screen } from '@shared';
import { CartHeader } from '@storeComp';

export function CartScreen() {
  return (
    <Screen>
      <CartHeader />
      <View className="flex-1 p-5">
        <Text className="text-black text-center">Meu carrinho</Text>
      </View>
    </Screen>
  );
}
