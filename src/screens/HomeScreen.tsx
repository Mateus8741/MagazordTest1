import React from 'react';
import { View } from 'react-native';

import { Logo } from '../components/Logo/Logo';
import { TaskList } from '../components/TaskList/TaskList';
import { TextInput } from '../components/TextInput/TextInput';

export function HomeScreen() {
  function handleAddTask(task: string) {
    console.log(task);
  }

  return (
    <View className="flex-1 px-5 bg-white dark:bg-gray-900">
      <Logo />

      <TextInput onAddTask={task => handleAddTask(task)} />

      <TaskList />
    </View>
  );
}
