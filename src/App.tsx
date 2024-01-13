import React, { FC } from 'react';
import TaskInput from './components/TaskInput';
import { Box, Typography } from '@mui/material';

const App: FC = () => {
  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: 'column'
    }}>
      <Typography variant='h3'>To-do</Typography>
      <TaskInput />
    </Box>
  );
}

export default App;
