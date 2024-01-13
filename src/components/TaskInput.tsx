import { AddCircleOutlined } from "@mui/icons-material";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import { FC, useState } from "react";

const TaskInput: FC = () => {
	const [taskInput, setTaskInput] = useState('');

	return (
		<>
			<Paper
				component="form"
				sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
			>
				<InputBase
					sx={{ ml: 1, flex: 1 }}
					placeholder="Add new task"
					value={taskInput}
					onChange={(e) => setTaskInput(e.target.value)}
				/>

				<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
				<IconButton color="inherit" sx={{ p: '10px' }} aria-label="directions">
					<AddCircleOutlined />
				</IconButton>
			</Paper>
		</>
	)
}

export default TaskInput;