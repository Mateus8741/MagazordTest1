import React from 'react';
import { Text, View } from 'react-native';

export function EmptyCartList() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Nenhum produto no carrinho, siga comprando! 💰</Text>
    </View>
  );
}
