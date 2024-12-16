import { Box, Typography, TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Table } from '@mui/material';
import React from "react";
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { usePlayers } from '../../hooks/usePlayersData.ts';
import { TeamPlayersResponse } from '../../store/slices/playersSlice.ts';
import { teamIdMapping } from '../../utils/teamIdMapping.ts';
import { RootState } from "../../store/store.ts";

const Squad: React.FC = (): JSX.Element => {
    const { teamId } = useParams<{ teamId: string }>();

    const mappeedTeamId = teamIdMapping[teamId ?? '0'];
    usePlayers(mappeedTeamId);

    const plPlayers: TeamPlayersResponse = useSelector((state: RootState) => state.plPlayers);

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center', height: '82vh', gap: '10px', width: '100%',
        }}>
            <Typography variant="h4" gutterBottom sx={{
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                color: '#1976d2',
                textAlign: 'center',
                marginBottom: '20px',
                marginTop: '0px',
                width: '100%',
                alignSelf: 'center',
                fontSize: '2rem',
            }}>
                Squad
            </Typography>
            <TableContainer component={Paper} sx={{ maxHeight: 500, width: '100%', overflow: 'auto', borderRadius: '12px' }}>
                <Table stickyHeader>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Position</TableCell>
                            <TableCell>DoB</TableCell>
                            <TableCell>Nationality</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {plPlayers.squad.map((player) => (
                        <TableRow key={player.id}>
                            <TableCell>{player.name}</TableCell>
                            <TableCell>{player.position}</TableCell>
                            <TableCell>{player.dateOfBirth}</TableCell>
                            <TableCell>{player.nationality}</TableCell>
                        </TableRow>
                    ))}
                </TableBody> 0
                </Table>
            </TableContainer>
        </Box>
    );
};

export default Squad;