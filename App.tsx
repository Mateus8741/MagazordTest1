/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { Toast } from '@shared';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Routes } from '@routes';

export function App(): JSX.Element {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
        <Toast />
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
