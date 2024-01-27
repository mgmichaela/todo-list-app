import React, { FC, useState } from 'react';
import TaskInput from './components/TaskInput';
import { Box, Typography } from '@mui/material';
import Tasks from './components/Tasks';

export const LOCAL_STORAGE_KEY = "tasks";

export interface Task {
  description: string;
  id: string;
  isCompleted: boolean;
}

const App: FC = () => {
  const [tasks, setTasks] = useState<Task[]>(() => (
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string) || []
  ));
  const [newTask, setNewTask] = useState<Task>({ description: '', id: '', isCompleted: false });
  const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);

  const createNewTaskHandler = () => {
    setTasks([...tasks, newTask]);
    setNewTask({ description: '', id: '', isCompleted: false })
  }

  const addTaskHandler = () => {
    if (!newTask) {
      setShowErrorMessage(true);

      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
      return
    }
    createNewTaskHandler();
  }

  const keyDownHandler = (e: any) => {
    if (e.key === "Enter") {
      createNewTaskHandler();
    }
  }

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'column'
    }}>
      <Typography variant='h3'>To-do</Typography>
      <TaskInput
        tasks={tasks}
        showErrorMessage={showErrorMessage}
        newTask={newTask}
        setNewTask={setNewTask}
        keyDownHandler={keyDownHandler}
        addTaskHandler={addTaskHandler}
      />
      <Tasks
        tasks={tasks}
        setTasks={setTasks}
      />
    </Box>
  );
}

export default App;
