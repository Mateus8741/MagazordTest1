import React from 'react';
import { FlatList, ListRenderItem, View } from 'react-native';

import { StoreDTO } from '@dtos';
import { Screen, useCart, useToastService } from '@shared';
import {
  CartCard,
  CartFooter,
  CartHeader,
  EmptyCartList,
  ResumeValue,
} from '@storeComp';

import { AppScreenProps } from '@routes';

export function CartScreen({ navigation }: AppScreenProps<'CartScreen'>) {
  const { products, items, clearCart } = useCart();

  const { showToast } = useToastService();

  const renderItem: ListRenderItem<StoreDTO> = ({ item }) => (
    <CartCard product={item} />
  );

  function handleFinish() {
    navigation.goBack();
    clearCart();
    showToast({
      type: 'success',
      message:
        'Sua compra foi finalizada com sucesso! 😁 Obrigado pela preferência!',
    });
  }

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

      {items > 0 && (
        <>
          <ResumeValue />

          <CartFooter onPress={handleFinish} />
        </>
      )}
    </Screen>
  );
}
