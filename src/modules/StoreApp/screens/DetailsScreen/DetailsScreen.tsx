import React from 'react';
import { Image, Text, View } from 'react-native';

import { Screen } from '@shared';
import { Header } from '@storeComp';

import { AppScreenProps } from '@routes';

export function DetailsScreen({ route }: AppScreenProps<'DetailsScreen'>) {
  const { data } = route.params;

  return (
    <>
      <Header title="Store" goBack />

      <Screen scrollable>
        <View className="flex-1 rounded-t-3xl bg-white w-full px-5 py-5">
          <Image source={{ uri: data.image }} className="h-80 -m-5 px-2" />

          <Text>DetailsScreen</Text>
        </View>
      </Screen>
    </>
  );
}
