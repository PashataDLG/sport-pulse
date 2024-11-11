import React from 'react';
import { Box, Typography, Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableRow, useMediaQuery, Theme, styled } from '@mui/material';
import { MdOutlineNextWeek } from "react-icons/md";
import dateFormatter from '../../utils/dateFormatter';
import theme from '../../theme/theme';
import { BoxTypeMap } from '@mui/system';
import { OverridableComponent } from '@mui/types';

interface Event {
	id: number;
	homeTeam: string;
	awayTeam: string;
	time: string;
	date: string;
}

interface UpcomingEventsProps {
	events: Event[];
	page: 'team' | 'home';
}

interface StyledBoxProps {
	page: 'team' | 'home';
}

const StyledBox = styled(Box)<StyledBoxProps>(({ theme, page }: { theme: Theme; page: 'team' | 'home' }) => ({
	width: page === 'team' ? '90%' : '26.5%',
	gap: theme.spacing(2),
	[theme.breakpoints.down('md')]: {
		width: '100%', // Full width on smaller screens for both pages
		padding: theme.spacing(2),
	},
}));

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events, page }) => {
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
						textAlign: 'center',
						color: '#1976d2',
						borderRadius: '20px',
						marginBottom: '20px',
						marginTop: '0px',
						width: '100%',
						alignSelf: 'center',
						fontSize: '2rem',
					}}>
						<MdOutlineNextWeek size={30} style={{ color: '#1976d2', marginRight: '10px' }} />
						Upcoming Events
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
													{dateFormatter(event.date)}
												</Typography>
												<Box sx={{
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
													gap: '10px',
												}}>
													<Typography sx={{ fontSize: '1.1rem' }}>
														{event.time}
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
						<MdOutlineNextWeek size={30} style={{ color: '#1976d2', marginRight: '10px' }} />
						Upcoming Events
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
													{dateFormatter(event.date)}
												</Typography>
												<Box sx={{
													display: 'flex',
													justifyContent: 'center',
													alignItems: 'center',
													gap: '10px',
												}}>
													<Typography sx={{ fontSize: '1.1rem' }}>
														{event.time}
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
				</StyledBox>
			)}
		</>
	);
};

export default UpcomingEvents;
