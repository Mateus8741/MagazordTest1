import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { formatMoney, useCart } from '@shared';

export function CartFooter() {
  const { products, items } = useCart();

  const total = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const formattedTotal = formatMoney(total + 0.99);

  return (
    <View className="flex-row justify-between items-center bg-white shadow-2xl pb-10 px-5 pt-2">
      <View className="flex-col">
        <View className="flex-row items-center">
          <Text className="text-center text-gray-400 dark:text-white text-xs font-regular">
            Total com
          </Text>

          <Text className="text-center text-gray-900 dark:text-white text-xs font-bold ml-1">
            entrega grátis
          </Text>
        </View>

        <View className="flex-row items-center">
          <Text className=" text-gray-900 dark:text-white text-base font-bold">
            {formattedTotal}
          </Text>

          <Text className=" text-gray-900 dark:text-white text-xs font-regular ml-1">
            / {items} {formattedTotal.length > 1 ? 'items' : 'item'}
          </Text>
        </View>
      </View>

      <TouchableOpacity className="text-center p-2 rounded-md bg-green-600 dark:bg-green-800">
        <Text className="text-center text-white text-md font-bold">
          Finalizar compra
        </Text>
      </TouchableOpacity>
    </View>
  );
}
