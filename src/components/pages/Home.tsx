<<<<<<< HEAD
import { Box, Container, useMediaQuery } from '@mui/material';
import Banner from '../common/Banner';
import UpcomingEvents from '../common/UpcomingEvents';
import LiveEvents from '../common/LiveEvents';
import theme from '../../theme/theme';
import Standings from '../common/Standings';
=======
import { Box, Container } from '@mui/material';
import Banner from '../common/Banner';
import UpcomingEvents from '../common/UpcomingEvents';
import LiveScoreWiget from '../common/LiveScoreWidget';

interface LiveEvent {
    id: number;
    homeTeam: string;
    awayTeam: string;
    scoreHomeTeam: number;
    scoreAwayTeam: number;
    time: string;
};
>>>>>>> 4be922f (added live events and removed unused imports)

const events = [
    { id: 1, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
    { id: 2, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
    { id: 3, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
    { id: 4, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
    { id: 5, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
    { id: 6, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
    { id: 7, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
    { id: 8, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
    { id: 9, homeTeam: 'Liverpool', awayTeam: 'Chelsea', time: '21:00', date: '2022-12-12' },
];

const liveEvents = [
    { id: 1, homeTeam: 'Liverpool', awayTeam: 'Chelsea', homeTeamGoals: 2, awayTeamGoals: 0, time: '43:54' },
    { id: 2, homeTeam: 'Liverpool', awayTeam: 'Chelsea', homeTeamGoals: 1, awayTeamGoals: 0, time: '43:54' },
    { id: 3, homeTeam: 'Liverpool', awayTeam: 'Chelsea', homeTeamGoals: 1, awayTeamGoals: 0, time: '43:54' },
    { id: 4, homeTeam: 'Liverpool', awayTeam: 'Chelsea', homeTeamGoals: 1, awayTeamGoals: 0, time: '43:54' },
    { id: 5, homeTeam: 'Liverpool', awayTeam: 'Chelsea', homeTeamGoals: 1, awayTeamGoals: 0, time: '43:54' },
    { id: 6, homeTeam: 'Liverpool', awayTeam: 'Chelsea', homeTeamGoals: 1, awayTeamGoals: 0, time: '43:54' },
];

const liveEvents: LiveEvent[] = [
    { id: 1, homeTeam: 'Liverpool', awayTeam: 'Arsenal', scoreHomeTeam: 2, scoreAwayTeam: 1, time: '90:00' },
    { id: 1, homeTeam: 'Liverpool', awayTeam: 'Arsenal', scoreHomeTeam: 2, scoreAwayTeam: 1, time: '90:00' },
    { id: 1, homeTeam: 'Liverpool', awayTeam: 'Arsenal', scoreHomeTeam: 2, scoreAwayTeam: 1, time: '90:00' },
    { id: 1, homeTeam: 'Liverpool', awayTeam: 'Arsenal', scoreHomeTeam: 2, scoreAwayTeam: 1, time: '90:00' },
];


const Home = (): JSX.Element => {
<<<<<<< HEAD
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
=======
    return (
        <Container maxWidth={false} sx={{ width: '100vw', padding: '0 !important' }}>
            <Banner />
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '10px',
            }}>
                < UpcomingEvents events={events} />
                <LiveScoreWiget events={liveEvents} />
            </Box>
>>>>>>> 4be922f (added live events and removed unused imports)

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
                    <UpcomingEvents events={events} />
                    <LiveEvents events={liveEvents} />
                    <Standings />
                </Box>
                :
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    justifyItems: 'center',
                    padding: '10px',
                    gap: '40px'
                }}>
                    <UpcomingEvents events={events} />
                    <LiveEvents events={liveEvents} />
                    <Standings />
                </Box>}
        </Container >
    );
};

export default Home;
