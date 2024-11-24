import React, { useEffect } from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box, Avatar, useMediaQuery } from '@mui/material';
import { IoMdPodium } from "react-icons/io";
import theme from '../../theme/theme';
import StyledBox from './Styledbox';
import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { fetchStandingsStart, fetchStandingsFailure, fetchStandingsSuccess, ApiResponse } from '../../slices/standingsSlice';
import { RootState } from '../store/store';
import { fetchStandingsData } from '../api/standingsApi';

interface StandingsProps {
    page: 'team' | 'home';
};

const Standings: React.FC<StandingsProps> = ({ page }) => {
    const dispatch = useDispatch();
    const { competition, standings, loading, error } = useSelector((state: RootState) => state.standings);

    const { data, error: queryError, isLoading } = useQuery<ApiResponse>(['standings'], fetchStandingsData, {
        onSuccess: (data: ApiResponse) => {
            dispatch(fetchStandingsSuccess(data));
        },
        onError: (error: unknown) => {
            if (error instanceof Error) {
                dispatch(fetchStandingsFailure(error.message));
            } else {
                dispatch(fetchStandingsFailure('An unknown error occurred'));
            }
        },
    });

    useEffect(() => {
        dispatch(fetchStandingsStart());
    }, [dispatch]);

    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <>
            {isMobile ? (
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'background.paper',
                    width: '100%'
                }}>
                    <Typography variant="h4" gutterBottom sx={{
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        color: '#1976d2',
                        textAlign: 'center',
                        borderRadius: '20px',
                        marginBottom: '20px',
                        marginTop: '0px',
                        width: '100%',
                        alignSelf: 'center',
                        fontSize: '2rem',
                    }}>
                        <IoMdPodium size={30} style={{ color: '#1976d2', marginRight: '10px' }} />
                        Standings
                    </Typography>
                    <TableContainer component={Paper} sx={{ maxHeight: 500, maxWidth: '100%', overflow: 'auto', borderRadius: '12px' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Team</TableCell>
                                    <TableCell>P</TableCell>
                                    <TableCell>DIFF</TableCell>
                                    <TableCell>PTS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {standings.map((row: { rank: number; logo: string; name: string; playedGames: number; goalDiff: number; points: number }) => (
                                    <TableRow key={row.rank}>
                                        <TableCell>{row.rank}</TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Avatar src={row.logo} alt={row.name} sx={{ marginRight: 2 }} />
                                                {row.name}
                                            </Box>
                                        </TableCell>
                                        <TableCell>{row.playedGames}</TableCell>
                                        <TableCell>{row.goalDiff}</TableCell>
                                        <TableCell>{row.points}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            ) : (
                <StyledBox page={page} sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    bgcolor: 'background.paper',
                }}>
                    <Typography variant="h4" gutterBottom sx={{
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        color: '#1976d2',
                        textAlign: 'center',
                        borderRadius: '20px',
                        marginBottom: '20px',
                        marginTop: '0px',
                        width: '100%',
                        alignSelf: 'center',
                        fontSize: '2rem',
                    }}>
                        <IoMdPodium size={30} style={{ color: '#1976d2', marginRight: '10px' }} />
                        Standings
                    </Typography>
                    <TableContainer component={Paper} sx={{ maxHeight: 500, maxWidth: '100%', overflow: 'auto', borderRadius: '12px' }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell>Team</TableCell>
                                    <TableCell>P</TableCell>
                                    <TableCell>DIFF</TableCell>
                                    <TableCell>PTS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {standingsData.map((row: { rank: boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.Key | null | undefined; logo: string | undefined; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; playedGames: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; goalDiff: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; points: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
                                    <TableRow key={row.rank}>
                                        <TableCell>{row.rank}</TableCell>
                                        <TableCell>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Avatar src={row.logo} alt={row.name} sx={{ marginRight: 2 }} />
                                                {row.name}
                                            </Box>
                                        </TableCell>
                                        <TableCell>{row.playedGames}</TableCell>
                                        <TableCell>{row.goalDiff}</TableCell>
                                        <TableCell>{row.points}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </StyledBox>
            )}
        </>
    );
};

export default Standings;


// const standingsData = [
//     { rank: 1, name: 'Liverpool', points: 23, logo: 'https://www.thesportsdb.com/images/media/team/badge/ar5tn91728915882.png', goalDiff: '+23', playedGames: 10 },
//     { rank: 2, name: 'Arsenal', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png', goalDiff: '+23', playedGames: 10 },
//     { rank: 3, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
//     { rank: 4, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
//     { rank: 5, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
//     { rank: 6, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
//     { rank: 7, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
//     { rank: 8, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
//     { rank: 9, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
//     { rank: 10, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
//     { rank: 11, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
// ];