import { useContext, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { MdOutlineNextWeek } from 'react-icons/md';
import { TeamPageContext, useTeamPageContext } from '../../context/teamPageContext';

const TeamPageBar = () => {
    const {selectedButton, handleButtonClick } = useTeamPageContext();

    const buttons = [
        { label: 'Upcoming Events', icon: <MdOutlineNextWeek size={18} style={{ marginRight: '8px' }} /> },
        { label: 'Live Events', icon: <MdOutlineNextWeek size={18} style={{ marginRight: '8px' }} /> },
        { label: 'Standings', icon: <MdOutlineNextWeek size={18} style={{ marginRight: '8px' }} /> },
    ]

    return (
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' }, gap: '15px', maxWidth: '100%' }}>
            {buttons.map((button, index) => (
                <Button
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    sx={{
                        padding: '10px 20px',
                        backgroundColor: selectedButton === index ? '#044863' : '#1976d2',
                        borderRadius: '20px',
                        transition: 'background-color 0.4s',
                        '&:hover': {
                            backgroundColor: '#044863',
                        },
                    }}>
                    <Typography sx={{
                        fontFamily: 'Montserrat',
                        fontWeight: 'bolder',
                        fontSize: '1.2rem',
                    }}>
                        {button.icon}
                        {button.label}
                    </Typography>
                </Button>
            ))}
        </Box>
    )
}

export default TeamPageBar