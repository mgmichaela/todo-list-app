import { Dispatch, FC, SetStateAction } from "react"
import Task from "./Task"

interface TasksProps {
	tasks: string[];
	setTasks: Dispatch<SetStateAction<string[]>>;
}

const Tasks: FC<TasksProps> = (props) => {
	const { tasks, setTasks } = props;

	return (
		<>
			<Task tasks={tasks}
				setTasks={setTasks} />
		</>
	)
}

export default Tasks;