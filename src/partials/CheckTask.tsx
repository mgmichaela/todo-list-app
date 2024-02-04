import { Checkbox, styled } from "@mui/material";
import { FC } from "react";

interface CheckTaskProps {
    taskCompleted: boolean;
    taskCheckHandler: (taskId: string) => void;
    taskId: string;
}

const CheckTask: FC<CheckTaskProps> = (props) => {
    const { taskCompleted, taskCheckHandler, taskId } = props;

    const BaseCustomIcon = styled('span')(({ theme }) => ({
		borderRadius: '100%',
		width: 20,
		height: 20,
		boxShadow:
			theme.palette.mode === 'dark'
				? '0 0 0 1px rgb(16 22 26 / 40%)'
				: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
		backgroundImage:
			theme.palette.mode === 'dark'
				? 'linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))'
				: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
		'.Mui-focusVisible &': {
			outline: '2px auto #c59fa1',
			outlineOffset: 2,
		},
		'input:hover ~ &': {
			backgroundColor: '#D9C2C0',
		},
	}));

	const CheckedCustomIcon = styled(BaseCustomIcon)({
		backgroundColor: '#c59fa1',
		backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
		'&::before': {
			display: 'block',
			width: 20,
			height: 20,
			backgroundImage:
				"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
				" fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
				"1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
			content: '""',
		},
		'input:hover ~ &': {
			backgroundColor: '#a86f72',
		},
	});
    
    return (
        <Checkbox
            value={taskCompleted}
            checked={taskCompleted}
            onChange={() => taskCheckHandler(taskId)}
            icon={<BaseCustomIcon />}
            checkedIcon={<CheckedCustomIcon />}
        />
    )
}

export default CheckTask;
