import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface FABProps extends TouchableOpacityProps {}

export function FAB({ ...rest }: FABProps) {
  return (
    <TouchableOpacity
      className="absolute bottom-12 right-4 w-14 h-14 border border-white shadow-md rounded-full bg-green-600 dark:bg-white dark:border-green-600 justify-center items-center"
      {...rest}>
      <Text className="text-white dark:text-green-600 text-2xl font-bold">
        +
      </Text>
    </TouchableOpacity>
  );
}
