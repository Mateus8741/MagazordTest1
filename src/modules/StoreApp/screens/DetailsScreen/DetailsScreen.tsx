import React from 'react';
import { Text, View } from 'react-native';

import { Screen } from '@shared';

export function DetailsScreen() {
  return (
    <Screen scrollable>
      <View className="flex-1 rounded-t-3xl bg-white w-full px-5 py-5">
        <Text>DetailsScreen</Text>
      </View>
    </Screen>
  );
}
