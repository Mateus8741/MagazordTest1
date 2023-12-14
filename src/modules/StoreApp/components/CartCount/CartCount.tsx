import React from 'react';
import { Pressable, Text, View } from 'react-native';

import { useCart } from '@services';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function CartCount() {
  const { quantity, addProduct, removeProduct, clearCart } = useCart();

  // trash-can-outline

  return (
    <View className="flex-row w-24 justify-between items-center bg-white rounded-md shadow-md p-2">
      <Pressable hitSlop={10} onPress={() => {}}>
        <Icon name="minus" size={20} color="green" />
      </Pressable>

      <Text className="text-green-600">0</Text>
      <Icon
        name="plus"
        size={20}
        color="green"
        onPress={() => {
          console.log('add');
        }}
      />
    </View>
  );
}
