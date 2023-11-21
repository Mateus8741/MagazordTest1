import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { Task } from '../components/TaskItem/TaskItem';

interface TaskStore {
  tasks: Task[];
  addTask: (task: Task) => void;
  toggleTask: (id: number) => void;
}

const useStore = create<TaskStore>()(
  persist(
    set => ({
      tasks: [],
      addTask: task => set(state => ({ tasks: [...state.tasks, task] })),
      toggleTask: id =>
        set(state => ({
          tasks: state.tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task,
          ),
        })),
    }),
    {
      name: 'tasks-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export function useStorage() {
  const { tasks, addTask, toggleTask } = useStore();

  return { tasks, addTask, toggleTask };
}
