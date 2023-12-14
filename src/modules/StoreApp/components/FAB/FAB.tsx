import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

interface FABProps extends TouchableOpacityProps {}

export function FAB({ ...rest }: FABProps) {
  return (
    <TouchableOpacity
      className="absolute bottom-12 right-4 w-14 h-14 border border-white shadow-md rounded-full bg-green-600 dark:bg-green-800 justify-center items-center"
      {...rest}>
      <Icon name="shopping-cart" size={24} color="#FFF" />
    </TouchableOpacity>
  );
}
