import React from 'react';
import { Pressable, StatusBar, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useCart } from '@shared';
import Icon from 'react-native-vector-icons/Octicons';

export function CartHeader() {
  const { goBack: Back } = useNavigation();

  const { clearCart } = useCart();

  function handleGoBack() {
    Back();
  }

  function handleClearCart() {
    clearCart();
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

        <Pressable hitSlop={10} onPress={handleClearCart}>
          <Text className="text-red-500 font-bold text-center">Limpar</Text>
        </Pressable>
      </View>
    </View>
  );
}
