import { FC } from "react"
import Task from "./Task"

interface TasksProps {
	tasks: string[];
}

const Tasks: FC<TasksProps> = (props) => {
	const {tasks} = props;
	
	return (
		<>
			<Task tasks={tasks} />
		</>
	)
}

export default Tasks;