import { AddCircleOutlined } from "@mui/icons-material";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";
import { LOCAL_STORAGE_KEY } from "../App";
import ErrorMessage from "./ErrorMessage";

interface TasksInputProps {
	tasks: string[];
	setTasks: Dispatch<SetStateAction<string[]>>;
}

const TaskInput: FC<TasksInputProps> = (props) => {
	const { tasks, setTasks } = props;

	const [showErrorMessage, setShowErrorMessage] = useState<boolean>(false);
	const [newTask, setNewTask] = useState<string>('');

	const createNewTaskHandler = () => {
		if (!newTask) {
			setShowErrorMessage(true);

			setTimeout(() => {
				setShowErrorMessage(false);
			}, 3000);
			return
		}
		setTasks([...tasks, newTask]);
		setNewTask('')
	}

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
	}, [tasks]);

	return (
		<>
			<Box sx={{ marginTop: '3.5rem', position: "absolute", top: 0, zIndex: 999  }}>
				{showErrorMessage && <ErrorMessage />}
			</Box>
			<Box sx={{ marginBottom: '1rem', paddingTop: '4rem' }}>
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
		</>
	)
}

export default TaskInput;