import { Box, Container, useMediaQuery } from '@mui/material'
import TeamBanner from '../common/TeamBanner';
import UpcomingEvents from '../common/UpcomingEvents';
import TeamPageBar from '../common/TeamPageBar';
import { useTeamPageContext } from '../../context/teamPageContext';
import LiveEvents from '../common/LiveEvents';
import Standings from '../common/Standings';
import TeamNews from '../common/TeamNews';

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
            case 0: return <UpcomingEvents events={teamUpcomingEvents} page='team' />;
            case 1: return <LiveEvents events={teamLiveEvents} page="team" />;
            case 2: return <Standings page="team" />;
            case 3: return <TeamNews />;
            default: return null;
        }
    }

    return (
        <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', padding: '0' }}>
            <TeamBanner />
            <TeamPageBar />
            <Box sx={{ flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                {renderContent()}
            </Box>
        </Container>
    )
}

export default TeamPage;