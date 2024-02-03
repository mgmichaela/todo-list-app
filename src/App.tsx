import { FC, useState } from 'react';
import TaskInput from './components/TaskInput';
import { Box, Typography } from '@mui/material';
import Tasks from './components/Tasks';

export const LOCAL_STORAGE_KEY = "tasks";
const ENTER_KEY = "Enter";

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
    if (!newTask.description) {
      setShowErrorMessage(true);

      setTimeout(() => {
        setShowErrorMessage(false);
      }, 3000);
      return
    }

    createNewTaskHandler();
  }

  const keyDownHandler = (e: any) => {
    if (e.key === ENTER_KEY && newTask.description) {
      createNewTaskHandler();
    }
  }

  return (
    <Box sx={{
      display: "flex",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#F2E6DE',
      maxWidth: '50rem', 
      margin: 'auto',
      borderRadius: '1.5rem',
      WebkitBoxShadow: '-20px 20px 0px 0px #d5ae95',
      border: '1px solid #38332e'
    }}
    >
      <Box sx={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <Typography fontFamily='Dawning of a New Day' sx={{fontSize: '2.5rem', color: '#38332e'}}>do whatchu gotta do</Typography>
      <Typography sx={{marginTop: '1rem', color: '#38332e'}}>٩(^ᗜ^ )و ´-</Typography>
      </Box>
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
