import { Box, Typography } from "@mui/material"
import { FC } from "react"

const Title: FC = () => {
	return (
		<Box sx={{
			display: 'flex',
			alignItems: 'center',
			flexDirection: 'column'
		}}
		>
			<Typography
				fontFamily='Dawning of a New Day'
				sx={{ fontSize: '2.5rem', color: '#38332e' }}>
				do whatchu gotta do
			</Typography>
			<Typography sx={{ marginTop: '1rem', color: '#38332e' }}>
				٩(^ᗜ^ )و ´-
			</Typography>
		</Box>
	)
}

export default Title;
