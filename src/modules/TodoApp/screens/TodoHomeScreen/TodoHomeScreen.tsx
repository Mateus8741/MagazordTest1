import React from 'react';
import { FlatList, View } from 'react-native';

import { Screen, useStorage, useTaskManager } from '@shared';
import { Logo, TaskItem, TextInput } from '@todoComp';

export function TodoHomeScreen() {
  const { addTask, toggleTask } = useTaskManager();
  const { tasks } = useStorage();

  return (
    <Screen>
      <View className="flex-1 px-5 bg-white dark:bg-gray-900">
        <Logo />

        <TextInput onAddTask={tsk => addTask(tsk)} />

        <View className="m-6" />

        <FlatList
          data={tasks}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <TaskItem task={item} onToggle={id => toggleTask(id)} />
          )}
        />
      </View>
    </Screen>
  );
}
