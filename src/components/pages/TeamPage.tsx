import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const TeamPage = (): JSX.Element => {
	return (
		<Container maxWidth="xl" sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
			<Box sx={{ width: '90%', height: '50vh', bgcolor: 'inherit', display: 'flex', border:'1px solid #f3f3f3' }}>
				<Box sx={{ width: '70%', height: '100%' }}>
					<Box sx={{ display: 'flex', alignContent: 'flex-start' }}>
						{/* Content goes here */}
					</Box>
				</Box>
				<Box sx={{ width: '50%', height: '100%', display: 'flex' }}>
					<img src="/public/2024-25-squad-photo-30092024-full.jpg" style={{width: '100%', }}  alt="" />
				</Box>
			</Box>
		</Container>
	)
}

export default TeamPage