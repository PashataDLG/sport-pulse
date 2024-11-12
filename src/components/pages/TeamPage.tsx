import { Container, useMediaQuery } from '@mui/material'
import TeamBanner from '../common/TeamBanner';
import UpcomingEvents from '../common/UpcomingEvents';

const teamUpcomingEvents = [
    { id: 1, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
    { id: 2, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
    { id: 3, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
    { id: 4, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' }, 
    { id: 5, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' }, 
];


const TeamPage = (): JSX.Element => {
	const isMobile = useMediaQuery('(max-width:600px)');

	return (
		<>
			{isMobile ? 
				<Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '0'  }}>
					<TeamBanner />
					<UpcomingEvents events={teamUpcomingEvents} page='team' />
				</Container >
				:
				<Container maxWidth="xl" sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', marginTop: '10%', flexDirection: 'column', gap: '10%', alignItems: 'center' }}>
					<TeamBanner />
					<UpcomingEvents events={teamUpcomingEvents} page='team' />
				</Container >
			}
		</>
	)
}

export default TeamPage