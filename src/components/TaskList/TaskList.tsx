import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

type Task = {
  id: number;
  title: string;
  task: string;
  completed: boolean;
};

interface TaskProps {
  task: Task;
  onToggle: (id: number) => void;
}

export function TaskList({ task, onToggle }: TaskProps) {
  return (
    <View className="bg-white dark:bg-gray-900 mb-4 relative">
      <Text className="text-base text-gray-900 dark:text-white mb-1">
        {task.title}
      </Text>

      <TouchableOpacity
        className="py-5 px-3 bg-gray-800 dark:bg-white rounded-md"
        onPress={() => onToggle(task.id)}>
        <Text
          className={`text-lg text-white dark:text-gray-900 font-semibold ${
            task.completed ? 'line-through italic' : ''
          }`}>
          {task.task}
        </Text>
      </TouchableOpacity>

      {task.completed && <Text className="absolute right-4 bottom-6">✅</Text>}
    </View>
  );
}
