import React from 'react';
import { Pressable, StatusBar, Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function CartHeader() {
  const { goBack: Back } = useNavigation();

  function handleGoBack() {
    Back();
  }

  function handleClearCart() {
    console.log('clear cart');
  }

  return (
    <View className="p-5">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <View className="flex-row justify-between items-center">
        <Pressable
          hitSlop={10}
          onPress={handleGoBack}
          className="flex-row items-center">
          <MaterialIcons name="chevron-left" size={30} color="green" />
        </Pressable>

        <Pressable hitSlop={10} onPress={handleClearCart}>
          <Text className="text-red-500 font-bold text-center">Limpar</Text>
        </Pressable>
      </View>
    </View>
  );
}
