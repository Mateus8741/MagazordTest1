import React, { useState } from 'react';
import {
  TextInput as RNInput,
  TextInputProps as RNInputProps,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { VariantProps, tv } from 'tailwind-variants';

const $input = tv({
  slots: {
    input: 'border dark:border-white rounded-md p-3',
    button: 'w-11 h-11 items-center justify-center rounded-md ml-3',
  },

  variants: {
    type: {
      todo: {
        input: 'dark:text-white',
        button: 'bg-blue-700 dark:decoration-sky-400',
      },

      weather: {
        input: 'dark:text-white',
        button: 'bg-orange-600 dark:decoration-orange-400',
      },

      store: {
        input: 'dark:text-white',
        button: 'bg-green-600 dark:decoration-green-400',
      },
    },
  },

  defaultVariants: {
    type: 'todo',
  },
});

interface AddTaskProps extends RNInputProps, VariantProps<typeof $input> {
  onAddTask: (text: string) => void;
  iconName: string;
  type?: 'todo' | 'weather' | 'store';
}

export function TextInput({
  onAddTask,
  iconName,
  type = 'todo',
  ...rest
}: AddTaskProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [taskText, setTaskText] = useState('');

  const { input, button } = $input({ type });

  const focusedStyles = isFocused
    ? 'border-blue-700'
    : 'border-gray-300 dark:border-gray-700';

  function handleNewTask() {
    onAddTask(taskText);
    setTaskText('');
  }

  return (
    <View className="flex-row items-center">
      <View className="flex-1">
        <RNInput
          className={`${input()} ${focusedStyles}`}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={setTaskText}
          value={taskText}
          {...rest}
        />
      </View>

      <TouchableOpacity className={button()} onPress={handleNewTask}>
        <Text className="text-white text-3xl">
          <Icon name={iconName} size={24} />
        </Text>
      </TouchableOpacity>
    </View>
  );
}
