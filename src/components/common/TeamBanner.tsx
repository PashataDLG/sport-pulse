import { Box, Typography } from "@mui/material"
import { MdStadium } from "react-icons/md"
import { useMediaQuery } from '@mui/material';


const TeamBanner = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box
            sx={{
                width: '90%',
                height: '50vh',
                bgcolor: 'inherit',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row', md: 'row', lg: 'row' },
                border: {lg: '1px solid #f3f3f3'},
            }}
        >
            <Box
                sx={{
                    width: '100%', 
                    height: '100%',
                    padding: {
                        lg: '100px 0px 0px 65px',
                        md: '100px 0px 0px 65px',
                        sm: '30px 0px 0px 65px',
                        xs: '10px 20px 0px 60px',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'auto 2fr' }, 
                        alignItems: 'flex-start',
                        gap: '10px',
                        height: '100%',
                    }}
                >
                    <img
                        src="https://sportal365images.com/process/smp-images-production/assets/team/logo/92-Liverpool-logo.png"
                        alt="Liverpool Logo"
                        style={{ width: isMobile ? '140px' : '160px', height: 'auto' }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: { xs: '0px', md: '50px' }, paddingTop: '15px' }}>
                        <Typography variant="h5" sx={{ fontWeight: 'bold', fontSize: '2rem', fontFamily: 'Montserrat', bottom: '10px', textAlign: {sm: 'center', md: 'center'} }}>
                            Liverpool
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', color: 'white' }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img src="https://sportal365images.com/process/smp-images-production/assets/country/flag/15-England-flag.png" alt="England Flag" style={{ width: '20px', height: 'auto' }} />
                                <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 'bold' }}>England</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <img src="https://sportal365images.com/process/smp-images-production/assets/15082022/87501e33-d82d-4098-854c-9e50259d7c6f.png" alt="Premier League Icon" style={{ width: '20px', height: 'auto' }} />
                                <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 'bold' }}>Premier League</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                <MdStadium size={20} />
                                <Typography sx={{ fontFamily: 'Montserrat', fontSize: '1rem', fontWeight: 'bold' }}>"Anfield" | Liverpool</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
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