import React from 'react';
import { FlatList, Text, View } from 'react-native';

import { StoreDTO } from '@dtos';
import { Logo, Screen, UseStoreApi } from '@shared';
import { CardShop } from '@storeComp';

export function StoreHomeScreen() {
  const variantType = 'store';

  const { data } = UseStoreApi('/products');

  function renderItem(item: StoreDTO) {
    return <CardShop data={item} />;
  }

  function renderEmpty() {
    return (
      <View className="flex-1 justify-center items-center">
        <Text className="text-lg font-bold text-gray-900 dark:text-white">
          Nem um produto encontrado
        </Text>
      </View>
    );
  }

  return (
    <Screen>
      <View className="flex-1 px-5">
        <Logo appName="Store" type={variantType} />

        <FlatList
          data={data?.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => renderItem(item)}
          ListEmptyComponent={renderEmpty}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
        />
      </View>
    </Screen>
  );
}
