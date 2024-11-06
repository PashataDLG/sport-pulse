import { AppBar, Toolbar, Button, Box, useMediaQuery, useTheme, IconButton, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useAppContext } from "../../context/appContext";
import NavDrawer from "../common/NavDrawer";
import TeamAppBar from "../common/TeamBar";
import { IoHome } from "react-icons/io5";
import { MdEmojiEvents } from "react-icons/md";
import { MdScoreboard } from "react-icons/md";
import { Link } from 'react-router-dom';

const teams = [
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/ar5tn91728915882.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/vwpvry1467462651.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/bk4qjs1546440351.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/xzqdr11517660252.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/dfyfhl1604094109.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/wq9sir1639406443.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/ia6i3m1656014992.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/eqayrf1523184794.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/ggqtd01621593274.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/mdj1ey1634670785.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/xtxwtu1448813356.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/lhwuiz1621593302.png' },
    { id: 1, crest: 'https://www.thesportsdb.com/images/media/team/badge/yutyxs1467459956.png' },
]

const Header = (): JSX.Element => {
    const { handleDrawerToggle } = useAppContext();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

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
                                    Live Score
                                </Typography>
                            </Button>
                        </Box>
                    )}
                </Toolbar>
            </AppBar>
            <TeamAppBar teams={teams} />
        </>
    );
};

export default Header;