import React from 'react';
import * as RN from 'react-native';

import { formatMoney, useCart } from '@shared';

interface CartFooterProps extends RN.TouchableOpacityProps {}

export function CartFooter({ ...rest }: CartFooterProps) {
  const { products, items } = useCart();

  const total = products.reduce((acc, product) => {
    return acc + product.price * product.quantity;
  }, 0);

  const formattedTotal = formatMoney(total + 0.99);

  return (
    <RN.View className="flex-row justify-between items-center bg-white shadow-2xl pb-10 px-5 pt-2">
      <RN.View className="flex-col">
        <RN.View className="flex-row items-center">
          <RN.Text className="text-center text-gray-400 dark:text-white text-xs font-regular">
            Total com
          </RN.Text>

          <RN.Text className="text-center text-gray-900 dark:text-white text-xs font-bold ml-1">
            entrega grátis
          </RN.Text>
        </RN.View>

        <RN.View className="flex-row items-center">
          <RN.Text className=" text-gray-900 dark:text-white text-base font-bold">
            {formattedTotal}
          </RN.Text>

          <RN.Text className=" text-gray-900 dark:text-white text-xs font-regular ml-1">
            / {items} {formattedTotal.length > 1 ? 'items' : 'item'}
          </RN.Text>
        </RN.View>
      </RN.View>

      <RN.TouchableOpacity
        className="text-center p-2 rounded-md bg-green-600 dark:bg-green-800"
        {...rest}>
        <RN.Text className="text-center text-white text-md font-bold">
          Finalizar compra
        </RN.Text>
      </RN.TouchableOpacity>
    </RN.View>
  );
}
