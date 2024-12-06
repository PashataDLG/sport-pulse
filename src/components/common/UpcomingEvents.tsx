import React from 'react';
import { Box, Typography, Avatar, Paper, Table, TableBody, TableCell, TableContainer, TableRow, useMediaQuery } from '@mui/material';
import { MdOutlineNextWeek } from "react-icons/md";
import { timeFormatter } from "../../utils/timeFormatter.ts";
import theme from '../../theme/theme';
import StyledBox from './Styledbox';
import { useUpcomingEventsData } from "../../hooks/useUpcomingEventsData.ts";
import { Match } from "../../store/slices/upcomingEventsSlice.ts";
import { useSelector } from "react-redux";
import { RootState } from '../../store/store';
import { dateFormatter } from "../../utils/dateFormatter.ts";

interface UpcomingEventsProps {
	page: 'team' | 'home';
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ page }) => {
	useUpcomingEventsData();
	const matches: Match[] = useSelector((state: RootState): Match[] => state.upcomingEvents.matches);

	const isMobile: boolean = useMediaQuery(theme.breakpoints.down('lg'));

	return (
		<>
			{isMobile ? (
				<Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', width: '100%' }}>
					<Typography variant="h4" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 'bold', textAlign: 'center', color: '#1976d2', borderRadius: '20px', marginBottom: '20px', marginTop: '0px', width: '100%', alignSelf: 'center', fontSize: '2rem' }}>
						<MdOutlineNextWeek size={30} style={{ color: '#1976d2', marginRight: '10px' }} />
						Upcoming Events
					</Typography>
					<TableContainer component={Paper} sx={{ maxHeight: 500, maxWidth: '100%', overflow: 'auto', borderRadius: '12px' }}>
						<Table stickyHeader>
							<TableBody>
								{matches.map((match: Match) => (
									<TableRow key={match.id}>
										<TableCell>
											<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
												<Avatar src={match.homeTeam.crest} />
												<Typography sx={{ fontFamily: 'Poppins', maxWidth: '150px', textAlign: 'center' }}>
													{match.homeTeam.shortName}
												</Typography>
											</Box>
										</TableCell>
										<TableCell>
											<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', padding: '20px', marginTop: '-30px' }}>
												<Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', fontFamily: 'Poppins' }}>
													{dateFormatter(match.utcDate)}
												</Typography>
												<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
													<Typography sx={{ fontSize: '1.1rem', fontFamily: 'Poppins' }}>
														{timeFormatter(match.utcDate)}
													</Typography>
												</Box>
											</Box>
										</TableCell>
										<TableCell>
											<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
												<Avatar src={match.awayTeam.crest} />
												<Typography sx={{ fontFamily: 'Poppins', maxWidth: '150px', textAlign: 'center' }}>
													{match.awayTeam.shortName}
												</Typography>
											</Box>
										</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</TableContainer>
				</Box>
			) : (
				<StyledBox page={page} sx={{ display: 'flex', flexDirection: 'column', bgcolor: 'background.paper' }}>
					<Typography variant="h4" gutterBottom sx={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#1976d2', textAlign: 'center', borderRadius: '20px', marginBottom: '20px', marginTop: '0px', width: '100%', alignSelf: 'center', fontSize: '2rem' }}>
						<MdOutlineNextWeek size={30} style={{ color: '#1976d2', marginRight: '10px' }} />
						Upcoming Events
					</Typography>
					<TableContainer component={Paper} sx={{ maxHeight: 500, maxWidth: '100%', overflow: 'auto', borderRadius: '12px' }}>
						<Table stickyHeader>
							<TableBody>
								{matches.map((match: Match) => (
									<TableRow key={match.id}>
										<TableCell>
											<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
												<Box component='img' src={match.homeTeam.crest} sx={{ width: '35px '}} />
												<Typography sx={{ fontFamily: 'Poppins', maxWidth: '150px', textAlign: 'center' }}>
													{match.homeTeam.shortName}
												</Typography>
											</Box>
										</TableCell>
										<TableCell>
											<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', padding: '20px', marginTop: '-30px' }}>
												<Typography sx={{ fontSize: '0.9rem', color: 'text.secondary', fontFamily: 'Roboto Mono' }}>
													{dateFormatter(match.utcDate)}
												</Typography>
												<Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
													<Typography sx={{ fontSize: '1.1rem', fontFamily: 'Roboto Mono' }}>
														{timeFormatter(match.utcDate)}
													</Typography>
												</Box>
											</Box>
										</TableCell>
										<TableCell>
											<Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '5px' }}>
												<Box component='img' src={match.awayTeam.crest} sx={{ width: '35px '}} />
												<Typography sx={{ fontFamily: 'Poppins', maxWidth: '150px', textAlign: 'center' }}>
													{match.awayTeam.shortName}
												</Typography>
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