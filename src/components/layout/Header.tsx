import { AppBar, Toolbar, Button, Box, useMediaQuery, useTheme, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useAppContext } from "../../context/appContext";
import NavDrawer from "../common/NavDrawer";
import TeamAppBar from "../common/TeamBar";
import { IoHome } from "react-icons/io5";
import { MdEmojiEvents } from "react-icons/md";
import { MdScoreboard } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosLogIn } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";

const Header = (): JSX.Element => {
    const { handleDrawerToggle } = useAppContext();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    const { loginWithRedirect } = useAuth0()

    return (
        <>
            <AppBar position="fixed" color="inherit">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'coulmn', }}>
                    <Link to="/">
                        <Box
                            component="img"
                            src="/src/assets/Pulse_sports__.png"
                            alt="SportPulse Logo"
                            sx={{ width: 250, height: 60, display: 'flex', transform: 'translateX(-25%)' }}
                        />
                    </Link>
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
                            <Link to="/">
                                <Button
                                    color="inherit"
                                    sx={{
                                        borderRadius: '20px',
                                        padding: '10px 20px',
                                        transition: 'color 0.4s',
                                        backgroundColor: 'inherit',
                                        color: '#00A4CC',
                                        '&:hover': {
                                            color: '#046b94',
                                        },
                                    }}
                                >
                                    <IoHome size={22} style={{ color: 'inherit' }} />
                                    <Typography
                                        sx={{
                                            marginLeft: '10px',
                                            fontFamily: 'Montserrat',
                                            fontWeight: 'bolder',
                                            fontSize: '1.2rem',
                                            color: 'inherit',
                                        }}
                                    >
                                        Home
                                    </Typography>
                                </Button>
                            </Link>
                            <Button
                                color="inherit"
                                sx={{
                                    borderRadius: '20px',
                                    padding: '10px 20px',
                                    transition: 'color 0.4s',
                                    backgroundColor: 'inherit',
                                    color: '#00A4CC',
                                    '&:hover': {
                                        color: '#046b94',
                                    },
                                }}
                            >
                                <MdEmojiEvents size={22} style={{ color: 'inherit' }} />
                                <Typography
                                    sx={{
                                        marginLeft: '10px',
                                        fontFamily: 'Montserrat',
                                        fontWeight: 'bolder',
                                        fontSize: '1.2rem',
                                        color: 'inherit',
                                    }}
                                >
                                    Events
                                </Typography>
                            </Button>
                            <Link to="/live-events">
                                <Button
                                    color="inherit"
                                    sx={{
                                        borderRadius: '20px',
                                        padding: '10px 20px',
                                        transition: 'color 0.4s',
                                        backgroundColor: 'inherit',
                                        color: '#00A4CC',
                                        '&:hover': {
                                            color: '#046b94',
                                        },
                                    }}
                                >
                                    <MdScoreboard size={22} style={{ color: 'inherit' }} />
                                    <Typography
                                        sx={{
                                            marginLeft: '10px',
                                            fontFamily: 'Montserrat',
                                            fontWeight: 'bolder',
                                            fontSize: '1.2rem',
                                            color: 'inherit',
                                        }}
                                    >
                                        Live Events
                                    </Typography>
                                </Button>
                            </Link>
                                <Button
                                    color="inherit"
                                    sx={{
                                        borderRadius: '20px',
                                        padding: '10px 20px',
                                        transition: 'color 0.4s',
                                        backgroundColor: 'inherit',
                                        color: '#00A4CC',
                                        '&:hover': {
                                            color: '#046b94',
                                        },
                                    }}
                                    onClick={() => loginWithRedirect()}
                                >
                                    <IoIosLogIn size={22} style={{ color: 'inherit' }} />
                                    <Typography
                                        sx={{
                                            marginLeft: '10px',
                                            fontFamily: 'Montserrat',
                                            fontWeight: 'bolder',
                                            fontSize: '1.2rem',
                                            color: 'inherit',
                                        }}
                                    >
                                        Login
                                    </Typography>
                                </Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            <TeamAppBar />
        </>
    );
};

export default Header;