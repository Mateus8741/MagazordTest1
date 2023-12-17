import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';

import { StoreDTO } from '@dtos';
import { Logo, Screen, UseStoreApi, useCart, useToastService } from '@shared';
import { CardShop, EmptyList, FAB } from '@storeComp';

import { AppTabScreenProps } from '@routes';

export function StoreHomeScreen({
  navigation,
}: AppTabScreenProps<'StoreHomeScreen'>) {
  const variantType = 'store';

  const { items } = useCart();

  const { showToast } = useToastService();

  const { data } = UseStoreApi('/products');

  function goToDetails(product: StoreDTO) {
    navigation.navigate('DetailsScreen', { data: product });
  }

  function goToCart() {
    navigation.navigate('CartScreen');
  }

  function renderItem(item: StoreDTO) {
    return <CardShop data={item} onPress={() => goToDetails(item)} />;
  }

  useEffect(() => {
    if (items >= 1) {
      showToast({
        type: 'warning',
        message: 'Você ainda tem itens no carrinho',
      });
    }
  }, [items, showToast]);

  return (
    <Screen>
      <View className="flex-1 px-5">
        <Logo appName="Store" type={variantType} />

        <FlatList
          data={data?.data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => renderItem(item)}
          ListEmptyComponent={EmptyList}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{
            justifyContent: 'space-between',
          }}
        />
      </View>

      <FAB onPress={goToCart} />
    </Screen>
  );
}
