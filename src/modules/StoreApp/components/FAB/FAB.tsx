import React from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { useCart } from '@services';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface FABProps extends TouchableOpacityProps {}

export function FAB({ ...rest }: FABProps) {
  const { items } = useCart();

  return (
    <TouchableOpacity
      className="absolute bottom-12 right-5 w-14 h-14 border border-white shadow-md rounded-full bg-green-600 dark:bg-green-800 justify-center items-center"
      {...rest}>
      <Icon name="shopping-cart" size={24} color="#FFF" />

      {items > 0 && (
        <View className="absolute -top-1 right-0 h-5 items-center justify-center bg-red-500 rounded-full">
          <Text className="text-white font-bold text-xs px-2 text-center">
            {items}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
