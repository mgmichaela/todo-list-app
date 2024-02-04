import { TextField, Typography } from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";

interface SingleTaskProps {
    editedTask: string;
    taskId: string;
    newValue: string;
    setNewValue: Dispatch<SetStateAction<string>>;
    taskCompleted: boolean;
    taskDescription: string;
}

const textFieldStyle = {
    fontFamily: 'Gaegu',
    fontSize: '1.25rem'
};

const SingleTask: FC<SingleTaskProps> = (props) => {
    const { editedTask, taskId, newValue, setNewValue, taskCompleted, taskDescription } = props;

    return (
        editedTask === taskId ? (
            <TextField
                value={newValue}
                onChange={(e) => setNewValue(e.target.value)}
                sx={{ "& fieldset": { border: 'none' } }}
                InputProps={{
                    style: textFieldStyle,
                }}
            />
        ) : (
            <Typography
                fontFamily='Gaegu'
                fontSize='1.25rem'
                sx={{
                    cursor: 'default',
                    padding: '0.5rem',
                    textDecoration: taskCompleted
                        ? 'line-through'
                        : 'none',
                    opacity: taskCompleted
                        ? 0.35
                        : 1
                }}
            >
                {taskDescription}
            </Typography>
        )
    )
}

export default SingleTask;
