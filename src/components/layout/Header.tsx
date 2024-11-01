import { AppBar, Toolbar, Typography, Button, Box, useMediaQuery, useTheme, IconButton, Avatar } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useAppContext } from "../../context/appContext";
import NavDrawer from "../common/NavDrawer";

const Header = (): JSX.Element => {
    const { handleDrawerToggle } = useAppContext();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <AppBar position="fixed" color="inherit">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'coulmn', }}>
                <Box
                    component="img"
                    src="/src/assets/Pulse_sports__.png"
                    alt="SportPulse Logo"
                    sx={{ width: 250, height: 60, display: 'flex', transform: 'translateX(-25%)' }}
                />
                {isMobile ? (
                    <>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <NavDrawer />
                    </>
                ) : (
                    <Box sx={{ display: 'flex', gap: '20px' }}>
                        <Button color="inherit"
                            sx={{
                                borderRadius: '20px',
                                padding: '10px 20px',
                                transition: '0.4s',
                                fontFamily: 'Montserrat',
                                fontWeight: 'bolder',
                                fontSize: '1.2rem',
                                backgroundColor: '#00A4CC',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#007BAC',
                                },
                            }}>
                            Home
                        </Button>
                        <Button color="inherit"
                            sx={{
                                borderRadius: '20px',
                                padding: '10px 20px',
                                transition: '0.4s',
                                fontFamily: 'Montserrat',
                                fontWeight: 'bolder',
                                fontSize: '1.2rem',
                                backgroundColor: '#00A4CC',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#007BAC',
                                },
                            }}>
                            Events
                        </Button>
                        <Button color="inherit"
                            sx={{
                                borderRadius: '20px',
                                padding: '10px 20px',
                                transition: '0.4s',
                                fontFamily: 'Montserrat',
                                fontWeight: 'bolder',
                                fontSize: '1.2rem',
                                backgroundColor: '#00A4CC',
                                color: '#fff',
                                '&:hover': {
                                    backgroundColor: '#007BAC',
                                },
                            }}>
                            Live Scores
                        </Button>
                    </Box>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;