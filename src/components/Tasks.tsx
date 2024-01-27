import { DeleteForever } from "@mui/icons-material";
import { Box, Checkbox, Divider, IconButton, Paper, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react"
import { Task } from "../App";

interface TasksProps {
	tasks: Task[];
	setTasks: Dispatch<SetStateAction<Task[]>>;
}

const Tasks: FC<TasksProps> = (props) => {
	const { tasks, setTasks } = props;

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

	return (
		<>
			{tasks.map((task) => (
				<Box key={task.id}>
					<Paper sx={{
						p: '2px 4px',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: 400,
						marginBottom: '1rem',
					}}
					>
						<Typography sx={{
							cursor: 'default',
							padding: '0.5rem',
							textDecoration: task.isCompleted ? 'line-through' : 'none',
							opacity: task.isCompleted ? 0.35 : 1
						}}
						>
							{task.description}
						</Typography>
						<Box sx={{
							display: 'flex',
							alignItems: 'center',
							textAlign: 'right'
						}}
						>
							<Checkbox
								value={task.isCompleted}
								checked={task.isCompleted}
								onChange={() => taskCheckHandler(task.id)}
							/>
							<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
							<IconButton color="inherit" sx={{ p: '10px' }} onClick={() => removeTaskHandler(task.id)}>
								<DeleteForever />
							</IconButton>
						</Box>
					</Paper>
				</Box>
			))}
		</>
	)
}

export default Tasks;