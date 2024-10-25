import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';

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
    <Box sx={{ maxWidth: 360, bgcolor: 'background.paper', borderRadius: '16px', overflow: 'hidden', boxShadow: 3 }}>
      <Typography sx={{ p: 2, bgcolor: 'primary.main', color: 'primary.contrastText' }} variant="h6" component="div">
        Upcoming Events
      </Typography>
      <List component="nav" aria-label="upcoming sports events">
        {events.map(event => (
          <ListItem key={event.id} component="button">
            <ListItemText primary={event.name} secondary={`${event.date} at ${event.time}`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default UpcomingEvents;