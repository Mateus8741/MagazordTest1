import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

import { StoreDTO } from '@dtos';
import { Screen, useCart } from '@shared';
import { CartCard, CartHeader, EmptyCartList } from '@storeComp';

export function CartScreen() {
  const { products } = useCart();

  const renderItem: ListRenderItem<StoreDTO> = ({ item }) => (
    <CartCard product={item} />
  );

  return (
    <Screen>
      <CartHeader />
      <View className="flex-1 p-5">
        <FlatList
          data={products}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          ListEmptyComponent={EmptyCartList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Screen>
  );
}
