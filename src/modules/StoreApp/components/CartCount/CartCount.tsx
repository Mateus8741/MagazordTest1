import React from 'react';
import { Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export function CartCount() {
  // trash-can-outline

  return (
    <View className="flex-row w-24 justify-between items-center bg-white rounded-md shadow-md p-2">
      <Icon
        name="minus"
        size={20}
        color="green"
        onPress={() => {
          console.log('remove');
        }}
      />
      <Text className="text-green-600">0</Text>
      <Icon
        name="plus"
        size={20}
        color="green"
        onPress={() => {
          console.log('add');
        }}
      />
    </View>
  );
}
