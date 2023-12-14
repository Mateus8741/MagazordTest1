import React from 'react';
import { View } from 'react-native';

import { Screen, useCart } from '@shared';
import { CartCard, CartHeader } from '@storeComp';

export function CartScreen() {
  const { products } = useCart();

  return (
    <Screen>
      <CartHeader />
      <View className="flex-1 p-5">
        {products.map(product => (
          <CartCard key={product.id} product={product} />
        ))}
      </View>
    </Screen>
  );
}
