import { DeleteForever } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FC } from "react"

interface RemoveTaskButtonProps {
	removeTaskHandler: (taskId: string) => void;
	taskId: string;
}

const RemoveTaskButton: FC<RemoveTaskButtonProps> = (props) => {
	const { removeTaskHandler, taskId } = props;

	return (
		<IconButton
			sx={{
				p: '10px',
				color: '#d5ae95',
				stroke: '#38332e',
				strokeWidth: '0.45px',
				strokeLinecap: 'round',
				strokeLinejoin: 'round'
			}}
			onClick={() => removeTaskHandler(taskId)}>
			<DeleteForever />
		</IconButton>
	)
}

export default RemoveTaskButton;
