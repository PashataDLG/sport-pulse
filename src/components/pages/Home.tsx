import { Box, Container, useMediaQuery } from '@mui/material';
import Banner from '../common/Banner';
import UpcomingEvents from '../common/UpcomingEvents';
import LiveEvents from '../common/LiveEvents';
import theme from '../../theme/theme';
import Standings from '../common/Standings';

interface LiveEvent {
    id: number;
    homeTeam: string;
    awayTeam: string;
    scoreHomeTeam: number;
    scoreAwayTeam: number;
    time: string;
    homeTeamGoals: number;
    awayTeamGoals: number;
}

const liveEvents: LiveEvent[] = [
    { id: 1, homeTeam: 'Liverpool', awayTeam: 'Arsenal', scoreHomeTeam: 2, scoreAwayTeam: 1, time: '90:00', homeTeamGoals: 2, awayTeamGoals: 1 },
    { id: 2, homeTeam: 'Liverpool', awayTeam: 'Arsenal', scoreHomeTeam: 2, scoreAwayTeam: 1, time: '90:00', homeTeamGoals: 2, awayTeamGoals: 1 },
    { id: 3, homeTeam: 'Liverpool', awayTeam: 'Arsenal', scoreHomeTeam: 2, scoreAwayTeam: 1, time: '90:00', homeTeamGoals: 2, awayTeamGoals: 1 },
    { id: 4, homeTeam: 'Liverpool', awayTeam: 'Arsenal', scoreHomeTeam: 2, scoreAwayTeam: 1, time: '90:00', homeTeamGoals: 2, awayTeamGoals: 1 },
];


const Home = (): JSX.Element => {
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Container maxWidth={false} sx={{ width: '100%', padding: '0 !important' }}>
            <Banner />
            {isMobile ?
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '10px',
                    gap: '40px',
                    width: '100%',
                }}>
                    <UpcomingEvents page="home" />
                    <LiveEvents events={liveEvents} page="home" />
                    <Standings page="home" />
                </Box>
                :
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    padding: '10px',
                    gap: '40px'
                }}>
                    <UpcomingEvents page="home" />
                    <LiveEvents events={liveEvents} page="home"/>
                    <Standings page="home"/>
                </Box>}
        </Container >
    );
};

export default Home;
