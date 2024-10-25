import { Parallax } from 'react-parallax';
import { Box, Button, Container, Typography } from '@mui/material';
import Banner from '../common/Banner';
import UpcomingEvents from '../common/UpcomingEvents';

const events = [
    { id: 1, name: 'Football Match', date: '2024-10-30', time: '19:00' },
    { id: 2, name: 'Basketball Game', date: '2024-11-05', time: '20:30' },
  ];

const Home = (): JSX.Element => {
    return (
        <Container maxWidth={false} sx={{ width: '100vw', padding: '0 !important' }}>
            <Banner />
            <UpcomingEvents events={events} />
            <Box sx={{ py: 4 }}>
                {Array.from(new Array(10)).map((_, index) => (
                    <Box key={index} sx={{ margin: 'auto', maxWidth: 600, p: 2, borderBottom: '1px solid #ccc' }}>
                        <Typography variant="h6" gutterBottom>
                            Heading {index + 1}
                        </Typography>
                        <Typography>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et euismod ligula. Morbi mattis pretium interdum. Morbi vel dui nec magna elementum pellentesque non ac purus. Cras et erat in libero ultricies congue. Vivamus fermentum felis nec velit pharetra accumsan. Cras sit amet metus sit amet velit lacinia ullamcorper. Nam facilisis, massa vel pharetra aliquam, tellus velit fringilla ligula, a venenatis ipsum orci eget dui.
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Container>
    );
};

export default Home;
