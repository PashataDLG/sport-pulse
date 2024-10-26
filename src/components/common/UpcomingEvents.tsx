import React from 'react';
import { Box, Button, List, ListItem, ListItemText, Typography, Avatar } from '@mui/material';
import dateFormatter from '../../utils/dateFormatter';

interface Event {
	id: number;
	name: string;
	date: string;
	time: string;
}

interface UpcomingEventsProps {
	events: Event[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {

	
	return (
		<Box sx={{ width: 350, bgcolor: 'background.paper', borderRadius: '16px', overflow: 'hidden', boxShadow: 3, display: 'flex', flexDirection: 'column', gap: '1px' }}>
			<Typography sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText', fontFamily: 'Montserrat' }} variant="h6" component="div">
				Upcoming Events
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

						<Typography>Bolton</Typography>

						<Avatar src='https://www.thesportsdb.com/images/media/team/badge/yvxxrv1448808301.png' />
						<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
							<Typography variant="body2" color="text.secondary" sx={{
								fontFamily: 'Montserrat',
							}}>
								{event.time}
							</Typography>
							<Typography variant="body2" color="text.secondary" sx={{
								fontFamily: 'Montserrat',
							}}>
								{dateFormatter(event.date)}
							</Typography>
						</Box>
						<Avatar src='https://www.thesportsdb.com/images/media/team/badge/tyxsvt1424033035.png' />
						<Typography>Peterboro</Typography>
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
				'&:hover': {
					backgroundColor: '#007BAC',
				},
			}}>
				View All Events
			</Button>
			<Button sx={{
				borderRadius: '20px',
				fontFamily: 'Montserrat',
				fontWeight: 'bolder',
				fontSize: '1rem',
				backgroundColor: '#00A4CC',
				color: '#fff',
				'&:hover': {
					backgroundColor: '#007BAC',
				},
			}}>
				Buy Tickets
			</Button>
		</Box>
	);
};

export default UpcomingEvents;