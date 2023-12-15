import React from 'react';
import { Pressable, StatusBar, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useCart, useToastService } from '@shared';
import Icon from 'react-native-vector-icons/Octicons';

export function CartHeader() {
  const { goBack: Back } = useNavigation();
  const { showToast } = useToastService();

  const { clearCart, items } = useCart();

  function handleGoBack() {
    Back();
  }

  function handleClearCart() {
    clearCart();
    handleGoBack();
    showToast({
      message: 'Carrinho limpo com sucesso!',
    });
  }

  return (
    <View className="p-5">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View className="flex-row justify-between items-center">
        <Pressable
          hitSlop={10}
          onPress={handleGoBack}
          className="flex-row items-center">
          <Icon name="chevron-down" size={30} color="green" />
        </Pressable>

        {items >= 1 && (
          <Pressable hitSlop={10} onPress={handleClearCart}>
            <Text className="text-gray-600 font-bold text-center">Limpar</Text>
          </Pressable>
        )}
      </View>
    </View>
  );
}
