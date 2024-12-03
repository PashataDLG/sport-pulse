import React from 'react';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Box,
    useMediaQuery, Avatar
} from '@mui/material';
import {IoMdPodium} from "react-icons/io";
import theme from '../../theme/theme';
import StyledBox from './Styledbox';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import {useStandingsData} from "../../hooks/useStandingsData.ts";
import {TableEntry} from "../../store/slices/standingsSlice.ts";


interface StandingsProps {
    page: 'team' | 'home';
}

const Standings: React.FC<StandingsProps> = ({page}: StandingsProps) => {
    useStandingsData();
    const table: TableEntry[] = useSelector((state: RootState): TableEntry[] => state.standings.table);

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
                        <IoMdPodium size={30} style={{color: '#1976d2', marginRight: '10px'}}/>
                        Standings
                    </Typography>
                    <TableContainer component={Paper}
                                    sx={{maxHeight: 500, maxWidth: '100%', overflow: 'auto', borderRadius: '12px'}}>
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
                                {table.map((teamEntry) => (
                                    <TableRow key={teamEntry.position}>
                                        <TableCell>{teamEntry.position}</TableCell>
                                        <TableCell>
                                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                                <Avatar src={teamEntry.team.crest} alt={teamEntry.team.shortName}
                                                        sx={{marginRight: 2}}/>
                                                {teamEntry.team.shortName}
                                            </Box>
                                        </TableCell>
                                        <TableCell>{teamEntry.playedGames}</TableCell>
                                        <TableCell>{teamEntry.goalDifference}</TableCell>
                                        <TableCell>{teamEntry.points}</TableCell>
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
                        <IoMdPodium size={30} style={{color: '#1976d2', marginRight: '10px'}}/>
                        Standings
                    </Typography>
                    <TableContainer component={Paper}
                                    sx={{maxHeight: 500, maxWidth: '100%', overflow: 'auto', borderRadius: '12px'}}>
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
                                {table.map((teamEntry: TableEntry) => (
                                    <TableRow key={teamEntry.position}>
                                        <TableCell>{teamEntry.position}</TableCell>
                                        <TableCell>
                                            <Box sx={{display: 'flex', alignItems: 'center'}}>
                                                <Box component={'img'} src={teamEntry.team.crest}
                                                     alt={teamEntry.team.shortName}
                                                     sx={{marginRight: 2, width: '40px'}}/>

                                                {teamEntry.team.shortName}
                                            </Box>
                                        </TableCell>
                                        <TableCell>{teamEntry.playedGames}</TableCell>
                                        <TableCell>{teamEntry.goalDifference}</TableCell>
                                        <TableCell>{teamEntry.points}</TableCell>
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


