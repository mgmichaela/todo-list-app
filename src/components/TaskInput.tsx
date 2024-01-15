import { AddCircleOutlined } from "@mui/icons-material";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";

interface TasksInputProps {
	tasks: string[];
	setTasks: Dispatch<SetStateAction<string[]>>;
} 

const TaskInput: FC<TasksInputProps> = (props) => {
	const {tasks, setTasks} = props;
	
	const [newTask, setNewTask] = useState<string>('');

	const createNewTaskHandler = () => {
		setTasks([...tasks, newTask]);
		setNewTask('')
	}

	return (
		<Box sx={{ marginBottom: '1rem' }}>
			<Paper
				sx={{
					p: '2px 4px',
					display: 'flex',
					alignItems: 'center',
					width: 400
				}}
			>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Add new task"
					value={newTask}
					onChange={(e) => setNewTask(e.target.value)}
				/>
				<IconButton
					color="inherit"
					sx={{ p: '10px' }}
					onClick={() => createNewTaskHandler()}
				>
					<AddCircleOutlined />
				</IconButton>
			</Paper>
		</Box>
	)
}

export default TaskInput;