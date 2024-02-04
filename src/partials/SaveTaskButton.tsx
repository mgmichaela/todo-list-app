import { Save } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FC } from "react";

interface SaveTaskButtonProps {
    saveTaskHandler: (taskId: string) => void;
    taskId: string;
}

const SaveTaskButton: FC<SaveTaskButtonProps> = (props) => {
    const { saveTaskHandler, taskId } = props;

    return (
        <IconButton
            sx={{
                p: '10px',
                color: '#4c8db7',
                stroke: '#38332e',
                strokeWidth: '0.45px',
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
            }}
            onClick={() => saveTaskHandler(taskId)}
        >
            <Save />
        </IconButton>
    )
}

export default SaveTaskButton;
