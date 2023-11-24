import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useColorScheme } from 'nativewind';
import Icon from 'react-native-vector-icons/FontAwesome6';
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
        app: 'text-black dark:text-blue-700',
        name: 'text-blue-700 dark:text-white',
      },

      weather: {
        app: 'text-black dark:text-orange-600',
        name: 'text-orange-600 dark:text-white',
      },

      store: {
        app: 'text-black dark:text-green-600',
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
  padding?: boolean;
}

export function Logo({ appName, type = 'todo', padding = true }: LogoProps) {
  const [contrast, setContrast] = React.useState(false);

  const { top } = useAppSafeArea();

  const { app, name } = $logo({ type });

  const { colorScheme, toggleColorScheme } = useColorScheme();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function changeTheme() {
    if (colorScheme === 'dark') {
      setContrast(true);
    } else {
      setContrast(false);
    }
  }

  useEffect(() => {
    changeTheme();
  }, [changeTheme, colorScheme]);

  return (
    <View
      className={`flex-row ${
        padding === true && 'pb-4'
      } justify-center relative`}
      style={{ paddingTop: padding === true ? top : 0 }}>
      <Text className={app()}>{appName}</Text>
      <Text className={name()}>App</Text>

      {appName === 'Todo' && (
        <TouchableOpacity
          className={`absolute ${
            contrast === true ? 'bg-white' : 'bg-black'
          } rounded-full w-12 h-12 justify-center items-center left-0 bottom-5`}
          onPress={toggleColorScheme}>
          <Icon
            name={contrast === true ? 'sun' : 'moon'}
            size={30}
            color={contrast === true ? '#000' : '#FFF'}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
