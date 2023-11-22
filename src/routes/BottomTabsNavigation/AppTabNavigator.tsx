import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { StoreHomeScreen } from '@store';
import { TodoHomeScreen } from '@todo';
import { WeatherHomeScreen } from '@weather';

import { AppTabBar } from './AppTabBar';

export type AppTabBottomTabParamList = {
  TodoHomeScreen: undefined;
  WeatherHomeScreen: undefined;
  StoreHomeScreen: undefined;
};

function renderTabBar(props: BottomTabBarProps) {
  return <AppTabBar {...props} />;
}

export function AppTabNavigator() {
  const { Navigator, Screen } =
    createBottomTabNavigator<AppTabBottomTabParamList>();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={renderTabBar}>
      <Screen name="TodoHomeScreen" component={TodoHomeScreen} />
      <Screen name="WeatherHomeScreen" component={WeatherHomeScreen} />
      <Screen name="StoreHomeScreen" component={StoreHomeScreen} />
    </Navigator>
  );
}
