import { Parallax } from 'react-parallax';
import { Box, Button, Container, Typography } from '@mui/material';

const Home = (): JSX.Element => {
    return (
        <Container maxWidth={false} sx={{ width: '100vw', padding: '0 !important' }}>
            <Parallax
                bgImage='/AdobeStock_286933595_Preview.jpeg'
                strength={500}
                bgImageStyle={{ height: '100%', width: '100%' }}
            >
                <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Box
                        sx={{
                            margin: '0',
                            padding: '0',
                            width: '100%',
                            height: '70vh',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignContent: 'space-around',
                        }}>
                        <Box sx={{
                            position: 'absolute',
                            width: '100%',
                            height: '150%',
                            backgroundColor: 'rgba(0, 0, 0, 0.4)',
                            zIndex: 1
                        }} />
                        <Typography
                            variant="h4"
                            component="h1"
                            sx={{
                                position: 'relative',
                                color: 'white',
                                textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
                                zIndex: 2,
                                fontFamily: 'Radley Sans',
                                fontSize: '3.5rem',
                                textAlign: 'center',
                            }}
                        >
                            The best sport <br /> event website!
                        </Typography>
                        <Box sx={{
                            width: '40%',
                            borderBottom: '4px solid white',
                            borderRadius: '20px',
                            margin: '20px auto 0',
                            zIndex: 2
                        }} />
                        <Typography component="p" sx={{
                            textAlign: 'center',
                            marginTop: '20px',
                            fontSize: '1.3rem',
                            color: 'white',
                            fontFamily: 'Montserrat',
                            zIndex: 2
                        }}>
                            Experience the thrill of live sports events <br /> and stay updated  with real-time scores and updates. <br /> Join us and be part of the excitement!
                        </Typography>
                        <Button color='inherit' sx={{
                            backgroundColor: '#00A4CC',
                            '&:hover': {
                                backgroundColor: '#007BAC',
                            },
                            top: '7%',
                            padding: '12px 30px',
                            borderRadius: '20px',
                            color: 'white',
                            textTransform: 'none',
                            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
                            transition: 'background-color 0.3s',
                            zIndex: 2,
                            fontFamily: 'Montserrat',
                            fontWeight: 'bold',
                            fontSize: '1.1rem',
                        }}>
                            JOIN NOW!
                        </Button>
                    </Box >
                </div>
            </Parallax >
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