import { DeleteForever } from "@mui/icons-material";
import { Box, Checkbox, Divider, IconButton, Paper, Typography } from "@mui/material";
import { FC } from "react"

interface TaskProps {
	tasks: string[];
}

const Task: FC<TaskProps> = (props) => {
	const {tasks} = props;

	return (
		<>
		{tasks.map((task) => (
			<Paper sx={{
				p: '2px 4px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				width: 400,
				marginBottom: '1rem'
			}}
			>
				<Typography sx={{ cursor: 'default', padding: '0.5rem' }}>
					{task}
				</Typography>
				<Box sx={{
					display: 'flex',
					alignItems: 'center',
					textAlign: 'right'
				}}
				>
					<Checkbox />
					<Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
					<IconButton color="inherit" sx={{ p: '10px' }}>
						<DeleteForever />
					</IconButton>
				</Box>
			</Paper>
		))}
		</>
	)
}

export default Task;