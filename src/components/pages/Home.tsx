import { Box, Container, useMediaQuery } from '@mui/material';
import Banner from '../common/Banner';
import UpcomingEvents from '../common/UpcomingEvents';
import LiveEvents from '../common/LiveEvents';
import theme from '../../theme/theme';

const events = [
    { id: 1, name: 'Football Match', date: '2024-10-30', time: '19:00' },
    { id: 3, name: 'Basketball Game', date: '2024-11-05', time: '20:30' },
    { id: 4, name: 'Basketball Game', date: '2024-11-05', time: '20:30' },
    { id: 5, name: 'Basketball Game', date: '2024-11-05', time: '20:30' },
    { id: 6, name: 'Basketball Game', date: '2024-11-05', time: '20:30' },
    { id: 7, name: 'Basketball Game', date: '2024-11-05', time: '20:30' },
];

const liveEvents = [
    { id: 1, homeTeam: 'Liverpool', awayTeam: 'Chelsea', homeTeamGoals: 2, awayTeamGoals: 0, time: '43:54' }, 
    { id: 2, homeTeam: 'Liverpool', awayTeam: 'Chelsea', homeTeamGoals: 1, awayTeamGoals: 0, time: '43:54' }, 
    { id: 3, homeTeam: 'Liverpool', awayTeam: 'Chelsea', homeTeamGoals: 1, awayTeamGoals: 0, time: '43:54' }, 
    { id: 4, homeTeam: 'Liverpool', awayTeam: 'Chelsea', homeTeamGoals: 1, awayTeamGoals: 0, time: '43:54' }, 
    { id: 5, homeTeam: 'Liverpool', awayTeam: 'Chelsea', homeTeamGoals: 1, awayTeamGoals: 0, time: '43:54' }, 
    { id: 6, homeTeam: 'Liverpool', awayTeam: 'Chelsea', homeTeamGoals: 1, awayTeamGoals: 0, time: '43:54' }, 
];



const Home = (): JSX.Element => {
    return (
        <Container maxWidth={false} sx={{ width: '100vw', padding: '0 !important' }}>
            <Banner />
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                justifyItems: 'center',
                padding: '10px',
                gap: '40px'
                }}>
                    <UpcomingEvents events={ events } />
                    <LiveEvents events={ liveEvents } />
            </Box>

        </Container >
    );
};

export default Home;
