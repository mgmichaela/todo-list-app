import { Box, Container, Grid, Paper } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react"
import { Task } from "../App";
import RemoveTaskButton from "../partials/RemoveTaskButton";
import CheckTask from "../partials/CheckTask";
import DividingLine from "../partials/DividingLine";
import SaveTaskButton from "../partials/SaveTaskButton";
import CloseEditTaskButton from "../partials/CloseEditTaskButton";
import EditTaskButton from "../partials/EditTaskButton";
import SingleTask from "./SingleTask";

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

	const mouseOverHandler = (taskId: string) => {
		setHoveredTask(taskId);
	};

	const mouseOutHandler = () => {
		setHoveredTask('');
	};

	const editToggleHandler = (taskId: string, taskDescription: string) => {
		setNewValue(taskDescription);
		setEditedTask(taskId === editedTask ? '' : taskId);
	};

	const saveTaskHandler = (taskId: string) => {
		setTasks((previousTasks) => {
			return previousTasks.map((task) =>
				task.id === taskId ? { ...task, description: newValue } : task
			);
		});

		setEditedTask('');
	}

	const closeTaskHandler = () => {
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
							onMouseOver={() => mouseOverHandler(task.id)}
							onMouseOut={mouseOutHandler}
						>
							<SingleTask
								editedTask={editedTask}
								taskId={task.id}
								newValue={newValue}
								setNewValue={setNewValue}
								taskCompleted={task.isCompleted}
								taskDescription={task.description}
							/>
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
											<EditTaskButton
												editToggleHandler={editToggleHandler}
												taskId={task.id}
												taskDescription={task.description}
											/>
											<DividingLine />
										</>
									)}
								{editedTask === task.id ? (
									<>
										<SaveTaskButton
											saveTaskHandler={saveTaskHandler}
											taskId={task.id}
										/>
										<CloseEditTaskButton closeTaskHandler={closeTaskHandler} />
										<DividingLine />
									</>
								) : (
									<>
										<CheckTask
											taskCompleted={task.isCompleted}
											taskCheckHandler={taskCheckHandler}
											taskId={task.id}
										/>
										<DividingLine />
									</>
								)}
								<RemoveTaskButton
									removeTaskHandler={removeTaskHandler}
									taskId={task.id}
								/>
							</Box>
						</Paper>
					</Grid>
				</Grid>
			))}
		</Container>
	)
}

export default Tasks;
