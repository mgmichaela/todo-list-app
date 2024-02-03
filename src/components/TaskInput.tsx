import { AddCircleOutlined } from "@mui/icons-material";
import { Container, Grid, IconButton, InputBase, Paper } from "@mui/material";
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
		<Container sx={{ paddingBottom: '3rem' }}>
			<Grid
				container
				sx={{
					display: 'flex',
					justifyContent: 'center'
				}}>
				<Grid
					item
					xs={12}
					sx={{
						marginTop: '11rem',
						position: "absolute",
						top: 0,
						zIndex: 999
					}}>
					{showErrorMessage && <ErrorMessage />}
				</Grid>
				<Grid
					item
					xs={12}
					sx={{
						marginBottom: '1rem',
						paddingTop: '4rem'
					}}>
					<Paper
						sx={{
							p: '2px 4px',
							display: 'flex',
							alignItems: 'center',
							borderRadius: '1.5rem'
						}}
					>
						<InputBase
							sx={{ ml: 1, flex: 1, fontFamily: 'Gaegu', fontSize: '1.25rem' }}
							placeholder="Add new task..."
							value={newTask.description}
							onChange={(e) =>
								setNewTask({
									description: e.target.value,
									id: uuidv4(),
									isCompleted: false
								})
							}
							onKeyDown={keyDownHandler}
							tabIndex={0}
						/>
						<IconButton
							sx={{
								p: '10px',
								color: '#a7dcbc',
								stroke: '#38332e',
								strokeWidth: '0.45px',
								strokeLinecap: 'round',
								strokeLinejoin: 'round'
							}}
							onClick={addTaskHandler}
						>
							<AddCircleOutlined />
						</IconButton>
					</Paper>
				</Grid>
			</Grid>
		</Container>
	)
}

export default TaskInput;
