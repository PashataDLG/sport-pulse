import { Parallax } from 'react-parallax';
import { Box, Button, Container, Typography } from '@mui/material';
import Banner from '../common/Banner';
import UpcomingEvents from '../common/UpcomingEvents';

const events = [
    { id: 1, name: 'Football Match', date: '2024-10-30', time: '19:00' },
    { id: 3, name: 'Basketball Game', date: '2024-11-05', time: '20:30' },
    { id: 4, name: 'Basketball Game', date: '2024-11-05', time: '20:30' },
    { id: 5, name: 'Basketball Game', date: '2024-11-05', time: '20:30' },
    { id: 6, name: 'Basketball Game', date: '2024-11-05', time: '20:30' },
    { id: 7, name: 'Basketball Game', date: '2024-11-05', time: '20:30' },
];

const Home = (): JSX.Element => {
    return (
        <Container maxWidth={false} sx={{ width: '100vw', padding: '0 !important' }}>
            <Banner />
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '10px',  
                }}>
                    < UpcomingEvents events={ events } />
            </Box>

        </Container >
    );
};

export default Home;
