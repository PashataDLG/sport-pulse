import { Parallax } from 'react-parallax';
import { Box, Button, Container, Typography } from '@mui/material';
import Banner from '../common/Banner';

const Home = (): JSX.Element => {
    return (
        <Container maxWidth={false} sx={{ width: '100vw', padding: '0 !important' }}>
            <Banner />
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
