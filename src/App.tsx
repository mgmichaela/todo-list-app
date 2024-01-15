import React, { FC, useState } from 'react';
import TaskInput from './components/TaskInput';
import { Box, Typography } from '@mui/material';
import Tasks from './components/Tasks';

const App: FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
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
      <Tasks tasks={tasks}/>
    </Box>
  );
}

export default App;
