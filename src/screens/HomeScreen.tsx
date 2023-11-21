import React from 'react';
import { FlatList, View } from 'react-native';

import { Logo } from '../components/Logo/Logo';
import { TaskItem } from '../components/TaskItem/TaskItem';
import { TextInput } from '../components/TextInput/TextInput';
import useTaskManager from '../hooks/useTasks';

export function HomeScreen() {
  const { tasks, addTask, toggleTask } = useTaskManager();

  return (
    <View className="flex-1 px-5 bg-white dark:bg-gray-900">
      <Logo />

      <TextInput onAddTask={tsk => addTask(tsk)} />

      <View className="m-6" />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={id => toggleTask(id)} />
        )}
      />
    </View>
  );
}
