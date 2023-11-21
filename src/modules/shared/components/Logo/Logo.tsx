import React from 'react';
import { Text, View } from 'react-native';

import { VariantProps, tv } from 'tailwind-variants';

import { useAppSafeArea } from '../../hooks/useAppSafeArea';

const $logo = tv({
  slots: {
    app: 'text-5xl italic font-bold',
    name: 'text-5xl italic font-bold',
  },

  variants: {
    type: {
      todo: {
        app: 'dark:text-blue-700',
        name: 'text-blue-700 dark:text-white',
      },

      weather: {
        app: 'dark:text-orange-600',
        name: 'text-orange-600 dark:text-white',
      },

      store: {
        app: 'dark:text-green-600',
        name: 'text-green-600 dark:text-white',
      },
    },
  },

  defaultVariants: {
    type: 'todo',
  },
});

interface LogoProps extends VariantProps<typeof $logo> {
  appName: string;
  type?: 'todo' | 'weather' | 'store';
}

export function Logo({ appName, type = 'todo' }: LogoProps) {
  const { top } = useAppSafeArea();

  const { app, name } = $logo({ type });

  return (
    <View className="flex-row pb-4 justify-center" style={{ marginTop: top }}>
      <Text className={app()}>{appName}</Text>
      <Text className={name()}>App</Text>
    </View>
  );
}
