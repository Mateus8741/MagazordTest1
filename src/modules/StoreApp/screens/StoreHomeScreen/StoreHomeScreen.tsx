import React from 'react';
import { FlatList, View } from 'react-native';

import { StoreDTO } from '@dtos';
import { Logo, Screen, UseStoreApi } from '@shared';
import { CardShop } from '@storeComp';

export function StoreHomeScreen() {
  const variantType = 'store';

  const { data } = UseStoreApi('/products');

  function renderItem(item: StoreDTO) {
    return <CardShop data={item} />;
  }

  return (
    <Screen>
      <View className="flex-1 px-5">
        <Logo appName="Store" type={variantType} />

        <FlatList
          data={data?.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => renderItem(item)}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Screen>
  );
}
