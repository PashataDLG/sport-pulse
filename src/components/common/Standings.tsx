import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box, Avatar, useMediaQuery } from '@mui/material';
import { IoMdPodium } from "react-icons/io";
import theme from '../../theme/theme';

const Standings: React.FC = () => {
    const standingsData = [
        { rank: 1, name: 'Liverpool', points: 23, logo: 'https://www.thesportsdb.com/images/media/team/badge/ar5tn91728915882.png', goalDiff: '+23', playedGames: 10 },
        { rank: 2, name: 'Arsenal', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/uyhbfe1612467038.png', goalDiff: '+23', playedGames: 10 },
        { rank: 3, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
        { rank: 4, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
        { rank: 5, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
        { rank: 6, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
        { rank: 7, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
        { rank: 8, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
        { rank: 9, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
        { rank: 10, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
        { rank: 11, name: 'Chelsea', points: 22, logo: 'https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png', goalDiff: '+23', playedGames: 10 },
    ];

    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <Box>
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
            Standings
        </Typography>
        <TableContainer component={Paper}  sx={{ maxHeight: 500, maxWidth: '100%', overflow: 'auto', borderRadius: '12px' }}>
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
                    {standingsData.map((row) => (
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
        <Box sx={{
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
                    {standingsData.map((row) => (
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
            )}
        </Box>
    );
};

export default Standings;