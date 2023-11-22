import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

import { Root2, WeatherDTO } from '@dtos';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface SearchBoxProps {
  data: WeatherDTO;
  onPress: (item: Root2) => void;
  show: boolean;
}

export function SearchBox({ data, onPress, show = false }: SearchBoxProps) {
  return (
    data?.length > 0 &&
    show && (
      <Animated.View
        className="bg-gray-300 shadow-md rounded-md dark:bg-white px-3 py-3 mt-1"
        entering={FadeIn}
        exiting={FadeOut}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="flex-row items-center py-2"
              onPress={() => {
                onPress(item);
              }}>
              <Icon name="map-marker" size={20} color="#000" />

              <Text className="text-sm font-medium text-gray-700 dark:text-gray-500 ml-2">
                {item.name}, {item.country}
              </Text>
            </TouchableOpacity>
          )}
          // eslint-disable-next-line react/no-unstable-nested-components
          ItemSeparatorComponent={() => (
            <View className="bg-gray-400 dark:bg-gray-200 h-px w-full" />
          )}
        />
      </Animated.View>
    )
  );
}
