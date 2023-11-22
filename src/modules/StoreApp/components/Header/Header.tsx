import React from 'react';
import { Pressable, StatusBar, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Logo, useAppSafeArea } from '@shared';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface HeaderProps {
  title: string;
  goBack?: boolean;
}

export function Header({ title, goBack }: HeaderProps) {
  const { top } = useAppSafeArea();

  const { goBack: Back } = useNavigation();

  function handleGoBack() {
    Back();
  }

  return (
    <View
      className="pb-4 bg-white dark:bg-gray-900"
      style={{ paddingTop: top }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <View className="flex-row justify-between items-center px-5">
        {goBack ? (
          <Pressable hitSlop={10} onPress={handleGoBack}>
            <MaterialIcons name="chevron-left" size={28} color="#FFF" />
          </Pressable>
        ) : (
          <View className="bg-transparent h-7 w-7" />
        )}

        <View className="items-center">
          <Logo appName={title} type="store" padding={false} />
        </View>

        <View className="bg-transparent h-7 w-7" />
      </View>
    </View>
  );
}
