import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FC } from "react";

interface CloseEditTaskButtonProps {
    closeTaskHandler: () => void;
}

const CloseEditTaskButton: FC<CloseEditTaskButtonProps> = (props) => {
    const { closeTaskHandler } = props;

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
            onClick={closeTaskHandler}
        >
            <Close />
        </IconButton>
    )
}

export default CloseEditTaskButton;
