import React from 'react';
import { Box, Button, List, ListItem, Typography, Avatar } from '@mui/material';

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
	return (
		<Box sx={{ width: 350, bgcolor: 'background.paper', borderRadius: '16px', overflow: 'hidden', boxShadow: 3, display: 'flex', flexDirection: 'column', gap: '1px', maxHeight: '80vh' }}>
			<Typography sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText', fontFamily: 'Montserrat', textAlign: 'center', fontWeight: 'bold'  }} variant="h6" component="div">
				Live Events
			</Typography>
			<List aria-label="upcoming sports events" sx={{
				overflow: 'auto',
				display: 'flex',
				flexDirection: 'column',
				gap: '5px',
			}}>
				{events.map(event => (
					<ListItem key={event.id} component="button" sx={{
						display: 'flex',
						justifyContent: 'space-between',
						gap: '5px'
					}}>

						<Typography>{event.homeTeam}</Typography>

						<Avatar src='https://www.thesportsdb.com/images/media/team/badge/ar5tn91728915882.png' />
						<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Typography variant="body2" color="text.secondary" sx={{
								fontFamily: 'Montserrat',
							}}>
								{event.time}
							</Typography>
							<Typography variant="body2" color="text.secondary" sx={{
								fontFamily: 'Montserrat',
                                fontSize: '1.1rem',
							}}>
                                {event.homeTeamGoals} - {event.awayTeamGoals}
							</Typography>
						</Box>
						<Avatar src='https://www.thesportsdb.com/images/media/team/badge/yvwvtu1448813215.png' />
						<Typography>{event.awayTeam}</Typography>
					</ListItem>
				))}
			</List>
			<Button sx={{
				borderRadius: '20px',
				fontFamily: 'Montserrat',
				fontWeight: 'bolder',
				fontSize: '1rem',
				backgroundColor: '#00A4CC',
				color: '#fff',
                maxWidth: '70%',
                alignSelf: 'center',
				'&:hover': {
					backgroundColor: '#007BAC',
				},
			}}>
				View All Live Events
			</Button>
		</Box>
	);
};

export default LiveEvents;