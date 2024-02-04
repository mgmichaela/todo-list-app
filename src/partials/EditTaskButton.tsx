import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FC } from "react";

interface EditTaskButtonProps {
    editToggleHandler: (taskId: string, taskDescription: string) => void;
    taskId: string;
    taskDescription: string;
}

const EditTaskButton: FC<EditTaskButtonProps> = (props) => {
    const {editToggleHandler, taskId, taskDescription} = props;

    return (
        <IconButton
        sx={{
            p: '10px',
            color: '#a7c7dc',
            stroke: '#38332e',
            strokeWidth: '0.45px',
            strokeLinecap: 'round',
            strokeLinejoin: 'round'
        }}
        onClick={() => editToggleHandler(taskId, taskDescription)}
    >
        <Edit />
    </IconButton>
    )
}

export default EditTaskButton;
