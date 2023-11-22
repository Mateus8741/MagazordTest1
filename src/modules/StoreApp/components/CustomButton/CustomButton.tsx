import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
}

export function CustomButton({ title, ...rest }: CustomButtonProps) {
  return (
    <TouchableOpacity
      className="bg-green-500 dark:bg-green-600 rounded-lg px-5 py-3 mt-5 items-center"
      {...rest}>
      <Text className="text-lg font-bold text-white dark:text-gray-900">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
