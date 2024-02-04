import { Close, DeleteForever, Edit, Save } from "@mui/icons-material";
import { Box, Checkbox, Container, Divider, Grid, IconButton, Paper, TextField, Typography, styled } from "@mui/material";
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

	const BaseCustomIcon = styled('span')(({ theme }) => ({
		borderRadius: '100%',
		width: 20,
		height: 20,
		boxShadow:
			theme.palette.mode === 'dark'
				? '0 0 0 1px rgb(16 22 26 / 40%)'
				: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
		backgroundImage:
			theme.palette.mode === 'dark'
				? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
				: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
		'.Mui-focusVisible &': {
			outline: '2px auto #c59fa1',
			outlineOffset: 2,
		},
		'input:hover ~ &': {
			backgroundColor: '#D9C2C0',
		},
	}));

	const CheckedCustomIcon = styled(BaseCustomIcon)({
		backgroundColor: '#c59fa1',
		backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
		'&::before': {
			display: 'block',
			width: 20,
			height: 20,
			backgroundImage:
				"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
				" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
				"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
			content: '""',
		},
		'input:hover ~ &': {
			backgroundColor: '#a86f72',
		},
	});

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

	const textFieldStyle = {
		fontFamily: 'Gaegu',
		fontSize: '1.25rem'
	};

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
						key={task.id}>
						<Paper sx={{
							p: '2px 4px',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							wordBreak: 'break-all',
							marginBottom: '1rem',
							backgroundColor: editedTask === task.id || hoveredTask === task.id
								? '#f0f6f9'
								: '#fff',
							borderRadius: '1.5rem',
              border: '0.5px solid #695c4f'
						}}
							onMouseOver={() => handleMouseOver(task.id)}
							onMouseOut={handleMouseOut}
						>
							{editedTask === task.id ? (
								<TextField
									value={newValue}
									onChange={(e) => setNewValue(e.target.value)}
									sx={{ "& fieldset": { border: 'none' } }}
									InputProps={{
										style: textFieldStyle,
									}}
								/>
							) : (
								<Typography
									fontFamily='Gaegu'
									fontSize='1.25rem'
									sx={{
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
												sx={{
													p: '10px',
													color: '#a7c7dc',
													stroke: '#38332e',
													strokeWidth: '0.45px',
													strokeLinecap: 'round',
													strokeLinejoin: 'round'
												}}
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
											sx={{
												p: '10px',
												color: '#4c8db7',
												stroke: '#38332e',
												strokeWidth: '0.45px',
												strokeLinecap: 'round',
												strokeLinejoin: 'round'
											}}
											onClick={() => handleSaveTask(task.id)}
										>
											<Save />
										</IconButton>
										<IconButton
											sx={{
												p: '10px',
												color: '#a7c7dc',
												stroke: '#38332e',
												strokeWidth: '0.45px',
												strokeLinecap: 'round',
												strokeLinejoin: 'round'
											}}
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
											icon={<BaseCustomIcon />}
											checkedIcon={<CheckedCustomIcon />}
										/>
										<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
									</>
								)}
								<IconButton sx={{
									p: '10px',
									color: '#d5ae95',
									stroke: '#38332e',
									strokeWidth: '0.45px',
									strokeLinecap: 'round',
									strokeLinejoin: 'round'
								}}
									onClick={() => removeTaskHandler(task.id)}>
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
