import { Container, useMediaQuery } from '@mui/material'
import TeamBanner from '../common/TeamBanner';
import UpcomingEvents from '../common/UpcomingEvents';
import TeamPageBar from '../common/TeamPageBar';
import { useTeamPageContext } from '../../context/teamPageContext';
import LiveEvents from '../common/LiveEvents';
import Standings from '../common/Standings';

const teamUpcomingEvents = [
	{ id: 1, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
	{ id: 2, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
	{ id: 3, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
	{ id: 4, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
	{ id: 5, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
];

const teamLiveEvents = [
	{ id: 1, homeTeam: 'Liverpool', awayTeam: 'Arsenal', scoreHomeTeam: 2, scoreAwayTeam: 1, time: '90:00', homeTeamGoals: 2, awayTeamGoals: 1 },
    { id: 1, homeTeam: 'Liverpool', awayTeam: 'Arsenal', scoreHomeTeam: 2, scoreAwayTeam: 1, time: '90:00', homeTeamGoals: 2, awayTeamGoals: 1 },
    { id: 1, homeTeam: 'Liverpool', awayTeam: 'Arsenal', scoreHomeTeam: 2, scoreAwayTeam: 1, time: '90:00', homeTeamGoals: 2, awayTeamGoals: 1 },
    { id: 1, homeTeam: 'Liverpool', awayTeam: 'Arsenal', scoreHomeTeam: 2, scoreAwayTeam: 1, time: '90:00', homeTeamGoals: 2, awayTeamGoals: 1 },
];


const TeamPage = (): JSX.Element => {
	const isMobile = useMediaQuery('(max-width:600px)');
	const { selectedButton } = useTeamPageContext();

	const renderContent = () => {
		switch (selectedButton) {
			case 0: return <UpcomingEvents events={teamUpcomingEvents} page='team' />; break;
			case 1: return <LiveEvents events={teamLiveEvents} page="team"/>; break;
			case 2: return <Standings page="team"/>; break;
			case 3: return <div>News page!</div>; break;
		}
	}

	return (
		<>
			{isMobile ?
				<Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '0' }}>
					<TeamBanner />
					<TeamPageBar />
					{renderContent()}
				</Container >
				:
				<Container maxWidth="xl" sx={{ height: '100vh', width: '100vw', display: 'flex', justifyContent: 'center', marginTop: '14%', flexDirection: 'column', gap: '10%', alignItems: 'center' }}>
					<TeamBanner />
					<TeamPageBar />
					{renderContent()}
				</Container >
			}
		</>
	)
}

export default TeamPage