import React from 'react';
import { Box, Typography, Avatar, useMediaQuery, Table, TableContainer, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import theme from '../../theme/theme';
import StyledBox from './Styledbox';
import { useLiveEventsData } from '../../hooks/useLiveEventsData';
import { useSelector } from "react-redux";
import { LiveMatchesResponse } from "../../store/slices/liveEventsSlice.ts";
import { RootState } from "../../store/store.ts";
import { Match } from "../../store/slices/liveEventsSlice.ts";
import { timeFormatter } from "../../utils/timeFormatter.ts";
import { MdScoreboard } from 'react-icons/md';
import BlinkingDot from './BlinkingDot';

interface LiveEventsProps {
    page: 'team' | 'home';
}

const LiveEvents: React.FC<LiveEventsProps> = ({ page }) => {
    useLiveEventsData();

    const liveMatches: LiveMatchesResponse = useSelector((state: RootState): LiveMatchesResponse => state.liveEvents);

    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        isMobile ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', width: '100%' }}>
                <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 'bold', textAlign: 'center', color: '#1976d2', borderRadius: '20px', marginBottom: '20px', marginTop: '0px', width: '100%', alignSelf: 'center', fontSize: '2rem' }}>
                    <MdScoreboard size={30} style={{ color: '#1976d2', marginRight: '10px' }} />
                    Live Events
                </Typography>
                {liveMatches.matches.length > 0 ? (
                    <TableContainer component={Paper} sx={{ maxHeight: 500, maxWidth: '100%', overflow: 'auto', borderRadius: '12px' }}>
                        <Table stickyHeader>
                            <TableBody>
                                {liveMatches.matches.map((event: Match) => (
                                    <TableRow key={event.id}>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                                <Avatar src={event.homeTeam.crest} />{event.homeTeam.shortName}
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', padding: '20px', marginTop: '-30px' }}>
                                                <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                                                    {timeFormatter(event.utcDate)}
                                                </Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                    <Typography sx={{ fontSize: '1.1rem' }}>
                                                        {event.score.fullTime.home}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '1.1rem' }}>
                                                        -
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '1.1rem' }}>
                                                        {event.score.fullTime.away}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                                <Avatar src={event.awayTeam.crest} />{event.awayTeam.shortName}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <Typography sx={{ textAlign: 'center', padding: '10px', fontSize: '1.3rem' }}>
                        No live events at the moment
                    </Typography>
                )}
            </Box>
        ) : (
            <StyledBox page={page} sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.paper' }}>
                <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#1976d2', textAlign: 'center', backgroundColor: 'inherit', borderRadius: '20px', marginBottom: '20px', width: '100%', alignSelf: 'center', fontSize: '2rem' }}>
                    <MdScoreboard size={30} style={{ color: '#1976d2', marginRight: '10px' }} />
                    Live Events
                </Typography>
                {liveMatches.matches.length > 0 ? (
                    <Box component={Paper} sx={{ maxHeight: 500, maxWidth: '100%', overflow: 'auto', borderRadius: '12px' }}>
                        <Table stickyHeader>
                            <TableBody>
                                {liveMatches.matches.map((event: Match) => (
                                    <TableRow key={event.id}>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                                <Avatar src={event.homeTeam.crest} />{event.homeTeam.shortName}
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', padding: '20px', marginTop: '-30px' }}>
                                                <Typography sx={{ fontSize: '0.9rem', color: 'text.secondary' }}>
                                                    <BlinkingDot />
                                                </Typography>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
                                                    <Typography sx={{ fontSize: '1.1rem' }}>
                                                        {event.score.fullTime.home}
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '1.1rem' }}>
                                                        -
                                                    </Typography>
                                                    <Typography sx={{ fontSize: '1.1rem' }}>
                                                        {event.score.fullTime.away}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
                                                <Avatar src={event.awayTeam.crest} />{event.awayTeam.shortName}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Box>
                ) : (
                    <Typography sx={{ textAlign: 'center', padding: '10px', fontSize: '1.5rem' }}>
                        No live events at the moment
                    </Typography>
                )}
            </StyledBox>
        )
    );
}

export default LiveEvents;