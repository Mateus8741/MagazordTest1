import React, { useState } from 'react';
import {
  TextInput as RNInput,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface AddTaskProps {
  onAddTask: (taskText: string) => void;
}

export function TextInput({ onAddTask }: AddTaskProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [taskText, setTaskText] = useState('');

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
          className={`border ${focusedStyles} rounded-md p-3`}
          placeholder="Adicionar novo todo..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChangeText={setTaskText}
          value={taskText}
        />
      </View>

      <TouchableOpacity
        className="w-11 h-11 items-center justify-center bg-blue-700 decoration-sky-400 rounded-md ml-3"
        onPress={handleNewTask}>
        <Text className="text-white text-3xl">+</Text>
      </TouchableOpacity>
    </View>
  );
}
