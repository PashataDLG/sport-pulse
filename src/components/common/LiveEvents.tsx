import React from 'react';
import { Box, Typography, Avatar, useMediaQuery, Table, TableContainer, TableBody, TableRow, TableCell,  Paper } from '@mui/material';
import { CgMediaLive } from "react-icons/cg";
import theme from '../../theme/theme';

interface LiveEvent {
    id: number;
    homeTeam: string;
    awayTeam: string;
    homeTeamGoals: number;
    awayTeamGoals: number;
    time: string;
}

interface LiveEventsProps {
    events: LiveEvent[];
}

const LiveEvents: React.FC<LiveEventsProps> = ({ events }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    return (
       isMobile ?  <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
        width: '100%'
    }}>
        <Typography variant="h4" gutterBottom sx={{
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#1976d2',
            borderRadius: '20px',
            marginBottom: '20px',
            marginTop: '0px',
            width: '100%',
            alignSelf: 'center',
            fontSize: '2rem',
        }}>
            Live Events
        </Typography>
        <TableContainer component={Paper} sx={{
            maxHeight: 500, maxWidth: '100%', overflow: 'auto', borderRadius: '12px'
        }}>
            <Table stickyHeader>

                <TableBody>
                    {events.map((event) => (
                        <TableRow key={event.id}>
                            <TableCell>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '5px'
                                }}>
                                    <Avatar src='https://www.thesportsdb.com/images/media/team/badge/ar5tn91728915882.png' />{event.homeTeam}
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '5px',
                                    padding: '20px',
                                    marginTop: '-30px'
                                }}>
                                    <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                                        {event.time}
                                    </Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px',
                                    }}>
                                        <Typography sx={{ fontSize: '1.1rem' }}>
                                            {event.homeTeamGoals}
                                        </Typography>
                                        <Typography sx={{ fontSize: '1.1rem' }}>
                                            -
                                        </Typography>
                                        <Typography sx={{ fontSize: '1.1rem' }}>
                                            {event.awayTeamGoals}
                                        </Typography>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                            <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '5px',
                                }}>
                                    <Avatar src='https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png' />{event.awayTeam}
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box> :  <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
        width: '400px'
    }}>
        <Typography variant="h4" gutterBottom sx={{
            fontFamily: 'Montserrat',
            fontWeight: 'bold',
            color: '#1976d2',
            textAlign: 'center',
            backgroundColor: 'inherit',
            borderRadius: '20px',
            marginBottom: '20px',
            width: '100%',
            alignSelf: 'center',
            fontSize: '2rem',
        }}>
            <CgMediaLive size={30} style={{ color: '#1976d2', marginRight: '10px'  }} />
            Live Events
        </Typography>
        <TableContainer component={Paper} sx={{
            maxHeight: 500, maxWidth: '100%', overflow: 'auto', borderRadius: '12px'
        }}>
            <Table stickyHeader>

                <TableBody>
                    {events.map((event) => (
                        <TableRow key={event.id}>
                            <TableCell>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '5px'
                                }}>
                                    <Avatar src='https://www.thesportsdb.com/images/media/team/badge/ar5tn91728915882.png' />{event.homeTeam}
                                </Box>
                            </TableCell>
                            <TableCell>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    gap: '5px',
                                    padding: '20px',
                                    marginTop: '-30px'
                                }}>
                                    <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                                        {event.time}
                                    </Typography>
                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '10px',
                                    }}>
                                        <Typography sx={{ fontSize: '1.1rem' }}>
                                            {event.homeTeamGoals}
                                        </Typography>
                                        <Typography sx={{ fontSize: '1.1rem' }}>
                                            -
                                        </Typography>
                                        <Typography sx={{ fontSize: '1.1rem' }}>
                                            {event.awayTeamGoals}
                                        </Typography>
                                    </Box>
                                </Box>
                            </TableCell>
                            <TableCell>
                            <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '5px',
                                }}>
                                    <Avatar src='https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png' />{event.awayTeam}
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
    );
}

export default LiveEvents;