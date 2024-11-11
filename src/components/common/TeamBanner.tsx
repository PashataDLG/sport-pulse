import { Box, Typography } from "@mui/material"
import { MdStadium } from "react-icons/md"
import { useMediaQuery } from '@mui/material';


const TeamBanner = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        // Main box
        <Box
            sx={{
                width: '90%',
                height: '50vh',
                bgcolor: 'inherit',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                border: { lg: '1px solid #f3f3f3' },
            }}
        >
            {/* Left-sided box!*/}
            <Box
                sx={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                }}
            >
                {/* Crest box */}
                <Box
                    sx={{
                        width: '40%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        bgcolor: 'inherit',
                    }}>
                    {/* Crest Content goes here! */}
                    <img
                        src="https://sportal365images.com/process/smp-images-production/assets/team/logo/92-Liverpool-logo.png"
                        alt="Liverpool Logo"
                        style={{ width: isMobile ? '140px' : '160px', height: 'auto' }}
                    />
                </Box>
                {/* Text box */}
                <Box
                    sx={{
                        width: '60%',
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                        bgcolor: 'inherit',
                        gap: '5px',
                    }}>
                    {/* Text Content goes here! */}
                    <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Montserrat', bottom: '10px', }}>
                        Liverpool
                    </Typography>

                    {/* England */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <img src="https://sportal365images.com/process/smp-images-production/assets/country/flag/15-England-flag.png" alt="England Flag" style={{ width: '20px', height: 'auto' }} />
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 'bold' }}>England</Typography>
                    </Box>

                    {/* Premier League */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px'}}>
                        <img src="https://sportal365images.com/process/smp-images-production/assets/15082022/87501e33-d82d-4098-854c-9e50259d7c6f.png" alt="Premier League Icon" style={{ width: '20px', height: 'auto' }} />
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 'bold' }}>Premier League</Typography>
                    </Box>

                    {/* Stadium */}
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <MdStadium size={20} />
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 'bold' }}>"Anfield" | Liverpool</Typography>
                    </Box>
                </Box>
            </Box>
            {/* Right-sided image box!*/}
            <Box
                sx={{
                    width: { xs: '100%', md: '50%' },
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: { xs: '20px 0px', md: '0' },
                }}
            >
                <img src="/public/2024-25-squad-photo-30092024-full.jpg" style={{ width: isMobile ? '100%' : '100%', }} alt="Team" />
            </Box>
        </Box>
    )
}

export default TeamBanner