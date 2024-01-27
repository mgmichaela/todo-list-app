import { AddCircleOutlined } from "@mui/icons-material";
import { Box, IconButton, InputBase, Paper } from "@mui/material";
import { Dispatch, FC, SetStateAction, useEffect } from "react";
import { LOCAL_STORAGE_KEY, Task } from "../App";
import ErrorMessage from "./ErrorMessage";
import { v4 as uuidv4 } from 'uuid';

interface TasksInputProps {
	tasks: Task[];
	showErrorMessage: boolean;
	newTask: Task;
	setNewTask: Dispatch<SetStateAction<Task>>;
	keyDownHandler: (e: any) => void;
	addTaskHandler: () => void;
}

const TaskInput: FC<TasksInputProps> = (props) => {
	const { tasks, showErrorMessage, newTask, setNewTask, keyDownHandler, addTaskHandler } = props;

	useEffect(() => {
		localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
	}, [tasks]);

	return (
		<>
			<Box sx={{ marginTop: '3.5rem', position: "absolute", top: 0, zIndex: 999 }}>
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
						value={newTask.description}
						onChange={(e) => setNewTask({ description: e.target.value, id: uuidv4(), isCompleted: false })}
						onKeyDown={keyDownHandler}
						tabIndex={0}
					/>
					<IconButton
						color="inherit"
						sx={{ p: '10px' }}
						onClick={addTaskHandler}
					>
						<AddCircleOutlined />
					</IconButton>
				</Paper>
			</Box>
		</>
	)
}

export default TaskInput;