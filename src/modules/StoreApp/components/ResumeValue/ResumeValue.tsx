import React from 'react';
import { Text, View } from 'react-native';

import { formatMoney, useAppSafeArea, useCart } from '@shared';

export function ResumeValue() {
  const { bottom } = useAppSafeArea();

  const { products } = useCart();

  const total = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const fomattedSubTotal = formatMoney(total);

  const fomattedTotal = formatMoney(total + 0.99);

  return (
    <View
      className="flex-shrink bg-white dark:bg-gray-800 shadow-lg p-5"
      style={{
        paddingBottom: bottom,
      }}>
      <Text className="text-black dark:text-white font-bold text-base mb-2">
        Resumo dos valores
      </Text>

      <View className="flex flex-row justify-between mt-2">
        <Text className="text-gray-800 dark:text-white font-regular text-base">
          Subtotal
        </Text>
        <Text className="text-black dark:text-white font-bold text-base">
          {fomattedSubTotal}
        </Text>
      </View>

      <View className="flex flex-row justify-between mt-2">
        <Text className="text-gray-400 dark:text-white font-regular text-base">
          Frete
        </Text>
        <Text className="text-green-500 dark:text-white text-base">Grátis</Text>
      </View>

      <View className="flex flex-row justify-between mt-2">
        <Text className="text-gray-400 dark:text-white text-base">
          Taxa de serviço
        </Text>
        <Text className="text-gray-400 dark:text-white text-base">R$ 0,99</Text>
      </View>

      <View className="flex flex-row justify-between mt-2">
        <Text className="text-black dark:text-white font-bold text-base">
          Total
        </Text>
        <Text className="text-black dark:text-white font-bold text-base">
          {fomattedTotal}
        </Text>
      </View>
    </View>
  );
}
