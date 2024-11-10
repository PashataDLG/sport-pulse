import { Container } from '@mui/material'
import TeamBanner from '../common/TeamBanner';


const TeamPage = (): JSX.Element => {
	return (
		<Container maxWidth="xl" sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
			<TeamBanner />
		</Container >
	)
}

export default TeamPage