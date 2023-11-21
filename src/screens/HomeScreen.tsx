import React from 'react';
import { View } from 'react-native';

import { Logo } from '../components/Logo/Logo';
import { TaskList } from '../components/TaskList/TaskList';
import { TextInput } from '../components/TextInput/TextInput';

export function HomeScreen() {
  function handleAddTask(task: string) {
    console.log(task);
  }

  const data = [
    {
      id: 1,
      title: 'Task 1',
      task: 'Task 1',
      completed: true,
    },
    {
      id: 2,
      title: 'Task 2',
      task: 'Task 2',
      completed: false,
    },
    {
      id: 3,
      title: 'Task 3',
      task: 'Task 3',
      completed: false,
    },
  ];

  return (
    <View className="flex-1 px-5 bg-white dark:bg-gray-900">
      <Logo />

      <TextInput onAddTask={task => handleAddTask(task)} />

      <View className="m-6" />

      {data.map(task => (
        <TaskList
          key={task.id}
          task={task}
          onToggle={() => console.log('onToggle')}
        />
      ))}
    </View>
  );
}
