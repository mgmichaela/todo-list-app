import { Close, DeleteForever, Edit, Save } from "@mui/icons-material";
import { Box, Checkbox, Container, Divider, Grid, IconButton, Paper, TextField, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react"
import { Task } from "../App";

interface TasksProps {
	tasks: Task[];
	setTasks: Dispatch<SetStateAction<Task[]>>;
}

const Tasks: FC<TasksProps> = (props) => {
	const { tasks, setTasks } = props;

	const [hoveredTask, setHoveredTask] = useState<string>('');
	const [editedTask, setEditedTask] = useState<string>('');
	const [newValue, setNewValue] = useState<string>('');

	const removeTaskHandler = (taskId: string) => {
		const newTodos = tasks.filter((task) => task.id !== taskId);
		setTasks(newTodos);
	};

	const taskCheckHandler = (taskId: string) => {
		setTasks((previousTasks) => {
			return previousTasks.map((task) =>
				task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
			);
		});
	};

	const handleMouseOver = (taskId: string) => {
		setHoveredTask(taskId);
	};

	const handleMouseOut = () => {
		setHoveredTask('');
	};

	const handleEditToggle = (taskId: string, taskDescription: string) => {
		setNewValue(taskDescription);
		setEditedTask(taskId === editedTask ? '' : taskId);
	};

	const handleSaveTask = (taskId: string) => {
		setTasks((previousTasks) => {
			return previousTasks.map((task) =>
				task.id === taskId ? { ...task, description: newValue } : task
			);
		});

		setEditedTask('');
	}

	const handleCloseTask = () => {
		setEditedTask('');
	}

	return (
		<Container>
			{tasks.map((task) => (
				<Grid
					container
					sx={{
						display: 'flex',
						justifyContent: 'center'
					}}>
					<Grid
						item
						xs={12}
						md={6}
						key={task.id}>
						<Paper sx={{
							p: '2px 4px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							wordBreak: 'break-all',
							marginBottom: '1rem',
							backgroundColor: editedTask === task.id || hoveredTask === task.id
								? '#f3f7ff'
								: '#fff',
						}}
							onMouseOver={() => handleMouseOver(task.id)}
							onMouseOut={handleMouseOut}
						>
							{editedTask === task.id ? (
								<TextField
									value={newValue}
									onChange={(e) => setNewValue(e.target.value)}
									sx={{ "& fieldset": { border: 'none' } }}
								/>
							) : (
								<Typography sx={{
									cursor: 'default',
									padding: '0.5rem',
									textDecoration: task.isCompleted
										? 'line-through'
										: 'none',
									opacity: task.isCompleted
										? 0.35
										: 1
								}}
								>
									{task.description}
								</Typography>
							)}
							<Box sx={{
								display: 'flex',
								alignItems: 'center',
								textAlign: 'right'
							}}
							>
								{task.isCompleted === false
									&& (editedTask !== task.id && hoveredTask === task.id)
									&& (
										<>
											<IconButton
												color="inherit"
												sx={{ p: '10px' }}
												onClick={() => handleEditToggle(task.id, task.description)}
											>
												<Edit />
											</IconButton>
											<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
										</>
									)}
								{editedTask === task.id ? (
									<>
										<IconButton
											color="inherit"
											sx={{ p: '10px' }}
											onClick={() => handleSaveTask(task.id)}
										>
											<Save />
										</IconButton>
										<IconButton
											color="inherit"
											sx={{ p: '10px' }}
											onClick={handleCloseTask}
										>
											<Close />
										</IconButton>
										<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
									</>
								) : (
									<>
										<Checkbox
											value={task.isCompleted}
											checked={task.isCompleted}
											onChange={() => taskCheckHandler(task.id)}
										/>
										<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
									</>
								)}
								<IconButton color="inherit" sx={{ p: '10px' }} onClick={() => removeTaskHandler(task.id)}>
									<DeleteForever />
								</IconButton>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			))}
		</Container>
	)
}

export default Tasks;
