import { AppBar, Toolbar, Typography, Button, Box, Drawer, useMediaQuery, useTheme, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { MouseEvent, KeyboardEvent, useState } from "react";
import { useAppContext } from "../../context/appContext";
import NavDrawer from "../common/NavDrawer";

const Header = (): JSX.Element => {
    const {isDrawerOpen, setIsDrawerOpen, handleDrawerToggle} = useAppContext();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <AppBar position="fixed" color="inherit">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                    sx={{
                        fontFamily: 'Noize Sport Free Vertion',
                        fontSize: { xs: '1.8rem', sm: '2.0rem', md: '2.2rem', lg: '2.5rem' },
                    }}>
                    SportPulse
                </Typography>
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