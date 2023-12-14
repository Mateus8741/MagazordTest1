import React from 'react';
import { Image, Text, View } from 'react-native';

import { StoreDTO } from '@dtos';
import { formatMoney } from '@shared';

import { CartCount } from '../CartCount/CartCount';

interface CartCardProps {
  product: StoreDTO;
}

export function CartCard({ product }: CartCardProps) {
  const formatedMoney = formatMoney(product.price);

  return (
    <View className="flex flex-row items-center rounded-md shadow-md bg-white">
      <View className="h-30 p-2 mr-2 rounded-md">
        <Image
          className="w-28 h-28 rounded-lg"
          source={{ uri: product.image }}
        />
      </View>

      <View className="flex-1 py-2 pr-4 justify-between">
        <View className="flex-grow mb-8">
          <Text className="text-lg font-bold">
            {product.title.length > 20
              ? `${product.title.substring(0, 20)}...`
              : product.title}
          </Text>
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-green-600 font-bold">{formatedMoney}</Text>
          <CartCount product={product} />
        </View>
      </View>
    </View>
  );
}
