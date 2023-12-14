import React from 'react';
import { FlatList, View } from 'react-native';

import { Screen, useCart } from '@shared';
import { CartCard, CartHeader, EmptyCartList } from '@storeComp';

export function CartScreen() {
  const { products } = useCart();

  return (
    <Screen>
      <CartHeader />
      <View className="flex-1 p-5">
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <CartCard product={item} />}
          ListEmptyComponent={EmptyCartList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Screen>
  );
}
