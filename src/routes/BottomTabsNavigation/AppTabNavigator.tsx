import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { TodoHomeScreen } from '@todo';

import { AppTabBar } from './AppTabBar';

export type AppTabBottomTabParamList = {
  HomeScreen: undefined;
  ScheduleScreen: undefined;
  HistoryScreen: undefined;
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
      <Screen name="HomeScreen" component={TodoHomeScreen} />
      <Screen name="ScheduleScreen" component={React.Fragment} />
      <Screen name="HistoryScreen" component={React.Fragment} />
    </Navigator>
  );
}
