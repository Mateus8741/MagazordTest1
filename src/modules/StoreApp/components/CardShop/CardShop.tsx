import React from 'react';
import { Image, Text, View } from 'react-native';

import { StoreDTO } from '@dtos';
import { formatMoney } from '@shared';

interface CardShopProps {
  data: StoreDTO;
}

export function CardShop({ data }: CardShopProps) {
  const formatedPrice = formatMoney(data.price);

  return (
    <View className="h-[170px] w-[170px] bg-gray-900 dark:bg-white rounded-lg overflow-hidden mb-6">
      <Image
        source={{ uri: data.image }}
        className="flex-1"
        resizeMode="cover"
      />
      <View className="px-3 py-1 justify-center bg-transparent">
        <Text
          className="text-lg font-bold text-white dark:text-gray-900 text-ellipsis"
          numberOfLines={1}>
          {data.title}
        </Text>
        <Text className="text-base font-normal text-zinc-300 dark:text-zinc-700">
          {formatedPrice}
        </Text>
      </View>
    </View>
  );
}
