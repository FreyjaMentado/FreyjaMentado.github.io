import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
	return (
		<Box sx={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			minHeight: "100vh",
		}}>
			<Box sx={{ textAlign: "left" }}>
				<Typography variant="h1" gutterBottom>
					h1. Heading
				</Typography>
				<Typography variant="h2" gutterBottom>
					h2. Heading
				</Typography>
				<Typography variant="h3" gutterBottom>
					h3. Heading
				</Typography>
				<Typography variant="h4" gutterBottom>
					h4. Heading
				</Typography>
				<Typography variant="h5" gutterBottom>
					h5. Heading
				</Typography>
				<Typography variant="h6" gutterBottom>
					h6. Heading
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					subtitle1.
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					subtitle2.
				</Typography>
				<Typography variant="body1" gutterBottom>
					body1.
				</Typography>
				<Typography variant="body2" gutterBottom>
					body2.
				</Typography>
				<Typography variant="button" display="block" gutterBottom>
					button text
				</Typography>
				<Typography variant="caption" display="block" gutterBottom>
					caption text
				</Typography>
				<Typography variant="overline" display="block" gutterBottom>
					overline text
				</Typography>
			</Box>
		</Box>
	);
}