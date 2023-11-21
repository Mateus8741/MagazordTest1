import { useState } from 'react';

import { useStorage } from './useStorage';

export interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const useTaskManager = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { addTask: add, toggleTask: toggle } = useStorage();

  const addTask = (taskText: string) => {
    const newTask: Task = {
      id: tasks.length + 1,
      title: `Tarefa ${tasks.length + 1}`,
      description: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    add(newTask);
  };

  const toggleTask = (id: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );

    setTasks(updatedTasks);

    toggle(id);
  };

  return {
    tasks,
    addTask,
    toggleTask,
  };
};

export default useTaskManager;
