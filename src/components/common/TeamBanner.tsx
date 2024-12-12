import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { MdStadium } from 'react-icons/md';
import { Team } from '../../store/slices/plTeamsSlice';

const TeamBanner = ({ team }: { team: Team }) => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box
            sx={{
                width: '90%',
                height: { xs: '50vh', sm: '50vh', md: '50vh', lg: '45vh' },
                display: 'flex',
                marginTop: { lg: '20px' },
                flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                flexGrow: 1,
                bgcolor: 'inherit', // Ensure background is inherited
                border: 'none', // Remove any border
            }}
        >
            {/* Left-sided box */}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: { xs: 'center', sm: 'center', md: 'center', lg: '' },
                    flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                    flexGrow: 1,
                }}
            >
                {/* Crest box */}
                <Box
                    sx={{
                        width: { xs: '30%', sm: '30%', md: '50%', lg: '100%' },
                        height: { xs: '50%', sm: '30%', md: '50%', lg: '100%' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: { xs: '0px', sm: '0px', md: '60px', lg: '0px' },
                    }}
                >
                    <img
                        src={team.strBadge}
                        alt={team.strTeamShort}
                        style={{ width: isMobile ? '100px' : '140px', height: 'auto', marginTop: isMobile ? '10px' : '20px' }}
                    />
                </Box>
                {/* Text box */}
                <Box
                    sx={{
                        width: { xs: '60%', sm: '60%', md: '80%', lg: '100%' },
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', sm: 'center', md: 'center', lg: 'flex-start' },
                        gap: '5px',
                        flexGrow: 1,
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Montserrat', bottom: '10px' }}>
                        {team.strTeam}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: { xs: 'center' } }}>
                        <img src='https://sportal365images.com/process/smp-images-production/assets/country/flag/15-England-flag.png' alt="England Flag" style={{ width: '20px', height: 'auto' }} />
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 'bold' }}>England</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: { xs: 'center' } }}>
                        <img src="https://sportal365images.com/process/smp-images-production/assets/15082022/87501e33-d82d-4098-854c-9e50259d7c6f.png" alt="Premier League Icon" style={{ width: '20px', height: 'auto' }} />
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 'bold' }}>Premier League</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <MdStadium size={20} />
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 'bold' }}>{team.strStadium}</Typography>
                    </Box>
                </Box>
            </Box>
            {/* Right-sided description box */}
            <Box
                sx={{
                    width: { xs: '100%', md: '100%', lg: '80%' },
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: { xs: '20px 0px', md: '0', lg: '10px 0px 0px 0px' },
                    flexGrow: 1,
                }}
            >
                <Typography
                    sx={{
                        fontFamily: 'Montserrat',
                        fontSize: '0.7rem',
                        textAlign: 'justify',
                        padding: '20px',
                        borderRadius: '8px',
                        bgcolor: 'inherit',
                        overflowY: 'auto',
                        maxHeight: '100%',
                    }}
                >
                    {team.strDescriptionEN}
                </Typography>
            </Box>
        </Box>
    );
};

export default TeamBanner;