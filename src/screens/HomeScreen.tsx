import React, { useState } from 'react';
import { FlatList, View } from 'react-native';

import { Logo } from '../components/Logo/Logo';
import { Task, TaskItem } from '../components/TaskItem/TaskItem';
import { TextInput } from '../components/TextInput/TextInput';

export function HomeScreen() {
  const [task, setTasks] = useState<Task[]>([]);

  function handleAddTask(taskText: string) {
    const newTask = {
      id: task.length + 1,
      title: `Tarefa ${task.length + 1}`,
      description: taskText,
      completed: false,
    };

    setTasks([...task, newTask]);
  }

  function handleToggleTask(id: number) {
    const newTasks = task.map(tsk =>
      tsk.id === id ? { ...tsk, completed: !tsk.completed } : tsk,
    );

    setTasks(newTasks);
  }

  return (
    <View className="flex-1 px-5 bg-white dark:bg-gray-900">
      <Logo />

      <TextInput onAddTask={tsk => handleAddTask(tsk)} />

      <View className="m-6" />

      <FlatList
        data={task}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TaskItem task={item} onToggle={id => handleToggleTask(id)} />
        )}
      />
    </View>
  );
}
