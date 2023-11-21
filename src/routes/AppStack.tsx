/* eslint-disable prettier/prettier */
import React from 'react';

import { NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
    AppTabBottomTabParamList,
    AppTabNavigator,
} from './BottomTabsNavigation/AppTabNavigator';

export type AppStackParamList = {
  AppTabNavigator: NavigatorScreenParams<AppTabBottomTabParamList>;
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
    </Navigator>
  );
}