import { Alert } from "@mui/material";
import { FC } from "react"

const ErrorMessage: FC = () => {
    return (
        <>
            <Alert severity="error">Oops! It looks like you didn't provide a task you're trying to accomplish.</Alert>
        </>
    )
}

export default ErrorMessage;