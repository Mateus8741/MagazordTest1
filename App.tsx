/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { TodoHomeScreen } from './src/modules/TodoApp/screens/TodoHomeScreen';

export function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <TodoHomeScreen />
    </SafeAreaProvider>
  );
}
