import React from 'react';
import { Box, Button, List, ListItem, Typography, Avatar, useMediaQuery, Tab, Table, TableContainer, TableBody, TableRow, TableCell, TableHead, Paper } from '@mui/material';
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
        //     isMobile ? (
        //         <Box sx={{ width: '80vw', bgcolor: 'background.paper', borderRadius: '16px', overflow: 'hidden', boxShadow: 3, display: 'flex', flexDirection: 'column', gap: '1px', maxHeight: '80vh' }}>
        //             <Typography sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText', fontFamily: 'Montserrat', textAlign: 'center', fontWeight: 'bold' }} variant="h6" component="div">
        //                 Live Events
        //             </Typography>
        //             <List aria-label="upcoming sports events" sx={{
        //                 overflow: 'auto',
        //                 display: 'flex',
        //                 flexDirection: 'column',
        //                 gap: '5px',
        //             }}>
        //                 {events.map(event => (
        //                     <ListItem key={event.id} component="button" sx={{
        //                         display: 'flex',
        //                         justifyContent: 'space-between',
        //                         gap: '5px'
        //                     }}>

        //                         <Typography>{event.homeTeam}</Typography>

        //                         <Avatar src='https://www.thesportsdb.com/images/media/team/badge/ar5tn91728915882.png' />
        //                         <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        //                             <Typography variant="body2" color="text.secondary" sx={{
        //                                 fontFamily: 'Montserrat',
        //                             }}>
        //                                 {event.time}
        //                             </Typography>
        //                             <Typography variant="body2" color="text.secondary" sx={{
        //                                 fontFamily: 'Montserrat',
        //                                 fontSize: '1.1rem',
        //                             }}>
        //                                 {event.homeTeamGoals} - {event.awayTeamGoals}
        //                             </Typography>
        //                         </Box>
        //                         <Avatar src='https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png' />
        //                         <Typography>{event.awayTeam}</Typography>
        //                     </ListItem>
        //                 ))}
        //             </List>
        //             <Box sx={{
        //                 display: 'flex',
        //                 flexDirection: 'row',
        //                 justifyContent: 'center',
        //                 paddingBottom: '5px',
        //                 paddingRight: '5px',
        //                 paddingLeft: '5px',
        //             }}>
        //                 <Button sx={{
        //                     borderRadius: '20px',
        //                     fontFamily: 'Montserrat',
        //                     fontWeight: 'bolder',
        //                     fontSize: '0.9rem',
        //                     backgroundColor: '#00A4CC',
        //                     color: '#fff',
        //                     maxWidth: '70%',
        //                     alignSelf: 'center',
        //                     '&:hover': {
        //                         backgroundColor: '#007BAC',
        //                     },
        //                 }}>
        //                     View All Live Events
        //                 </Button>
        //             </Box>
        //         </Box >
        // ) : (
        // <Box sx={{ width: 350, bgcolor: 'background.paper', borderRadius: '16px', overflow: 'hidden', boxShadow: 3, display: 'flex', flexDirection: 'column', gap: '1px', maxHeight: '80vh' }}>
        //     <Typography sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText', fontFamily: 'Montserrat', textAlign: 'center', fontWeight: 'bold' }} variant="h6" component="div">
        //                 Live Events
        //             </Typography>
        //     <List aria-label="upcoming sports events" sx={{
        //         overflow: 'auto',
        //         display: 'flex',
        //         flexDirection: 'column',
        //         gap: '5px',
        //     }}>
        //         {events.map(event => (
        //             <ListItem key={event.id} component="button" sx={{
        //                 display: 'flex',
        //                 justifyContent: 'space-between',
        //                 gap: '5px'
        //             }}>

        //                 <Typography>{event.homeTeam}</Typography>

        //                 <Avatar src='https://www.thesportsdb.com/images/media/team/badge/ar5tn91728915882.png' />
        //                 <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        //                     <Typography variant="body2" color="text.secondary" sx={{
        //                         fontFamily: 'Montserrat',
        //                     }}>
        //                         {event.time}
        //                     </Typography>
        //                     <Typography variant="body2" color="text.secondary" sx={{
        //                         fontFamily: 'Montserrat',
        //                         fontSize: '1.1rem',
        //                     }}>
        //                         {event.homeTeamGoals} - {event.awayTeamGoals}
        //                     </Typography>
        //                 </Box>
        //                 <Avatar src='https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png' />
        //                 <Typography>{event.awayTeam}</Typography>
        //             </ListItem>
        //         ))}
        //     </List>
        //     <Box sx={{
        //         display: 'flex',
        //         flexDirection: 'row',
        //         justifyContent: 'center',
        //         paddingBottom: '5px',
        //         paddingRight: '5px',
        //         paddingLeft: '5px',
        //     }}>
        //         <Button sx={{
        //             borderRadius: '20px',
        //             fontFamily: 'Montserrat',
        //             fontWeight: 'bolder',
        //             fontSize: '0.9rem',
        //             backgroundColor: '#00A4CC',
        //             color: '#fff',
        //             maxWidth: '70%',
        //             alignSelf: 'center',
        //             '&:hover': {
        //                 backgroundColor: '#007BAC',
        //             },
        //         }}>
        //             View All Live Events
        //         </Button>
        //     </Box>
        // </Box>
        // )

        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'background.paper',
            width: '400px'
        }}>
            <Typography variant="h4" gutterBottom sx={{
                fontFamily: 'Montserrat',
                fontWeight: 'bold',
                color: '#ffffff',
                textAlign: 'center',
                backgroundColor: '#1976d2',
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
        </Box>
    );
}

export default LiveEvents;