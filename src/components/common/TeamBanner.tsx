import { Box, Typography } from "@mui/material"
import { MdStadium } from "react-icons/md"
import { useMediaQuery } from '@mui/material';


const TeamBanner = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box
            sx={{
                width: '90%',
                minHeight: { xs: '50vh', sm: '50vh', md: '50vh', lg: '45vh' },
                bgcolor: 'inherit',
                display: 'flex',
                marginTop: { lg: '20px' },
                flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                border: { lg: '1px solid #f3f3f3' },
                flexGrow: 1,
            }}
        >
            {/* Left-sided box!*/}
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
                        bgcolor: 'inherit',
                        paddingTop: { xs: '0px', sm: '0px', md: '60px', lg: '0px' },
                    }}
                >
                    <img
                        src="https://sportal365images.com/process/smp-images-production/assets/team/logo/92-Liverpool-logo.png"
                        alt="Liverpool Logo"
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
                        bgcolor: 'inherit',
                        gap: '5px',
                        flexGrow: 1,
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Montserrat', bottom: '10px', }}>
                        Liverpool
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: { xs: 'center', } }}>
                        <img src="https://sportal365images.com/process/smp-images-production/assets/country/flag/15-England-flag.png" alt="England Flag" style={{ width: '20px', height: 'auto' }} />
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 'bold' }}>England</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: { xs: 'center', } }}>
                        <img src="https://sportal365images.com/process/smp-images-production/assets/15082022/87501e33-d82d-4098-854c-9e50259d7c6f.png" alt="Premier League Icon" style={{ width: '20px', height: 'auto' }} />
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 'bold' }}>Premier League</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <MdStadium size={20} />
                        <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 'bold' }}>"Anfield" | Liverpool</Typography>
                    </Box>
                </Box>
            </Box>
            {/* Right-sided image box!*/}
            <Box
                sx={{
                    width: { xs: '100%', md: '100%', lg: '55%' },
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: { xs: '20px 0px', md: '0' },
                    flexGrow: 1,
                }}
            >
                <Box
                    component="img"
                    src="/public/2024-25-squad-photo-30092024-full.jpg"
                    sx={{ width: { xs: '100%', md: '90%', lg: '100%' }, height: { lg: '100%' }, }}
                />
            </Box>
        </Box>
    )
}

export default TeamBanner