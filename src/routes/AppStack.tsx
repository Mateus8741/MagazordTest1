/* eslint-disable prettier/prettier */
import React from 'react';

import { StoreDTO } from '@dtos';
import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen, DetailsScreen } from '@store';

import {
  AppTabBottomTabParamList,
  AppTabNavigator,
} from './BottomTabsNavigation/AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
  DetailsScreen: {data: StoreDTO};
  CartScreen: undefined;
};

export function AppStack() {
  const { Navigator, Screen } = createNativeStackNavigator<AppStackParamList>();

  return (
    <Navigator
      initialRouteName="AppTabNavigator"
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Screen name="DetailsScreen" component={DetailsScreen}
        options={{
          presentation: 'transparentModal',
          headerShown: false,
          gestureEnabled: true,
          animation: 'fade',
        }}
      />
      <Screen name="CartScreen" component={CartScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
          gestureEnabled: true,
          animation: 'slide_from_bottom',
        }}
      />
    </Navigator>
  );
}
