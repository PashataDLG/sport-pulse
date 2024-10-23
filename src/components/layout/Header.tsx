import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";



const Header = (): JSX.Element => {
    return (
        <AppBar position="fixed" color="inherit">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{fontFamily: 'Noize Sport Free Vertion', fontSize: '2.5rem'}}>SportPulse</Typography>
                <Box sx={{ display: 'flex', gap: '20px' }}>
                    <Button color="inherit"
                        sx={{
                            borderRadius: '20px',
                            padding: '10px 20px',
                            transition: '0.3s',
                            fontFamily: 'Montserrat',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            '&:hover': {
                                backgroundColor: '#686666',
                                color: '#fff',
                            },
                        }}>
                        Home
                    </Button>
                    <Button color="inherit"
                        sx={{
                            borderRadius: '20px',
                            padding: '10px 20px',
                            transition: '0.3s',
                            fontFamily: 'Montserrat',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            '&:hover': {
                                backgroundColor: '#686666',
                                color: '#fff',
                            }
                        }}>
                        Events
                    </Button>
                    <Button color="inherit"
                        sx={{
                            borderRadius: '20px',
                            padding: '10px 20px',
                            transition: '0.3s',
                            fontFamily: 'Montserrat',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                            '&:hover': {
                                backgroundColor: '#686666',
                                color: '#fff',
                            }
                        }}>
                        Live Scores
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;