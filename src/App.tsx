import React, { FC, useState } from 'react';
import TaskInput from './components/TaskInput';
import { Box, Typography } from '@mui/material';
import Tasks from './components/Tasks';

export const LOCAL_STORAGE_KEY = "tasks";

const App: FC = () => {
  const [tasks, setTasks] = useState<string[]>(() => {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string) || []
  });

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
        setTasks={setTasks}
      />
      <Tasks
        tasks={tasks}
        setTasks={setTasks}
      />
    </Box>
  );
}

export default App;
