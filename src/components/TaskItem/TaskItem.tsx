import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import Animated, { FadeIn } from 'react-native-reanimated';

export type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

interface TaskProps {
  task: Task;
  onToggle: (id: number) => void;
}

export function TaskItem({ task, onToggle }: TaskProps) {
  return (
    <Animated.View
      className="bg-white dark:bg-gray-900 mb-4 relative"
      entering={FadeIn}>
      <Text className="text-base text-gray-900 dark:text-white mb-1">
        {task.title}
      </Text>

      <TouchableOpacity
        className="py-5 px-3 bg-gray-800 dark:bg-white rounded-md"
        onPress={() => onToggle(task.id)}
        disabled={task.completed}>
        <Text
          className={`text-lg text-white dark:text-gray-900 font-semibold ${
            task.completed ? 'line-through italic' : ''
          }`}>
          {task.description}
        </Text>
      </TouchableOpacity>

      {task.completed && <Text className="absolute right-4 bottom-6">✅</Text>}
    </Animated.View>
  );
}
