import { Container, Typography } from "@mui/material";
import { FC } from "react"

const ErrorMessage: FC = () => {
	return (
		<Container sx={{
			background: '#e4b9be',
			borderRadius: '1.5rem',
			WebkitBoxShadow: '-3px 3px 0px 0px #cf828b',
			border: '1px solid #38332e',
			paddingY: '0.25rem'
		}}>
			<Typography
				sx={{
					fontFamily: 'Special Elite',
					fontSize: { xs: '0.7rem', md: '0.85rem' }
				}}
			>
				(´•︵•`) oopsie, you're trying to add an empty task to your to-do list
			</Typography>
		</Container>
	)
}

export default ErrorMessage;
