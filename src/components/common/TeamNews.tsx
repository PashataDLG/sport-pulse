import { Box, Typography } from '@mui/material';
import { FaRegNewspaper } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const TeamNews = () => {
    return (
        // main box
        <Box sx={{ width: '100%' }}>
            <Typography variant="h4" sx={{ fontFamily: 'Montserrat', fontWeight: 'bold', color: '#1976d2', textAlign: 'center', padding: '10px' }}>
                <FaRegNewspaper size={30} style={{ marginRight: '18px' }} />
                Team News
            </Typography>
            {/* News box */}
            <Box sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' },
                gap: '40px',
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap: 'wrap',
                alignContent: 'flex-start',
                marginTop: '20px'
            }}>
                {/* News container */}
                <Box
                    sx={{
                        width: { xs: '100%', sm: '100%', md: '100%', lg: '30%', xl: '28%' },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover .news-title': {
                            color: '#1976d2 !important',
                        },
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    }}>
                    <Link to="/news" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column'}}>
                    <Box component="img" src='https://sportal365images.com/process/smp-images-production/sportal.bg/19052024/ac94e4b8-4b95-4101-b903-c96fb5f57682.jpg?operations=crop(80:551:5663:3692),fit(968:545)&format=webp' />
                    <Typography component="h2" className="news-title" sx={{ paddingTop: '10px', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Liverpool, Man United, Arsenal and Tottenham, will seek compensation from Man City, if the 'citizens' are found guilty
                    </Typography>
                    <Typography sx={{ paddingTop: '12px', fontFamily: 'Roboto Mono' }}>
                        12.06.24
                    </Typography>
                </Link>
            </Box>
            <Box
                    sx={{
                        width: { xs: '100%', sm: '100%', md: '100%', lg: '30%', xl: '28%' },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover .news-title': {
                            color: '#1976d2 !important',
                        },
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    }}>
                    <Link to="/news" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column'}}>
                    <Box component="img" src='https://sportal365images.com/process/smp-images-production/sportal.bg/19052024/ac94e4b8-4b95-4101-b903-c96fb5f57682.jpg?operations=crop(80:551:5663:3692),fit(968:545)&format=webp' />
                    <Typography component="h2" className="news-title" sx={{ paddingTop: '10px', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Liverpool, Man United, Arsenal and Tottenham, will seek compensation from Man City, if the 'citizens' are found guilty
                    </Typography>
                    <Typography sx={{ paddingTop: '12px', fontFamily: 'Roboto Mono' }}>
                        12.06.24
                    </Typography>
                </Link>
            </Box>
            <Box
                    sx={{
                        width: { xs: '100%', sm: '100%', md: '100%', lg: '30%', xl: '28%' },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover .news-title': {
                            color: '#1976d2 !important',
                        },
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    }}>
                    <Link to="/news" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column'}}>
                    <Box component="img" src='https://sportal365images.com/process/smp-images-production/sportal.bg/19052024/ac94e4b8-4b95-4101-b903-c96fb5f57682.jpg?operations=crop(80:551:5663:3692),fit(968:545)&format=webp' />
                    <Typography component="h2" className="news-title" sx={{ paddingTop: '10px', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Liverpool, Man United, Arsenal and Tottenham, will seek compensation from Man City, if the 'citizens' are found guilty
                    </Typography>
                    <Typography sx={{ paddingTop: '12px', fontFamily: 'Roboto Mono' }}>
                        12.06.24
                    </Typography>
                </Link>
            </Box>
            <Box
                    sx={{
                        width: { xs: '100%', sm: '100%', md: '100%', lg: '30%', xl: '28%' },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover .news-title': {
                            color: '#1976d2 !important',
                        },
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    }}>
                    <Link to="/news" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column'}}>
                    <Box component="img" src='https://sportal365images.com/process/smp-images-production/sportal.bg/19052024/ac94e4b8-4b95-4101-b903-c96fb5f57682.jpg?operations=crop(80:551:5663:3692),fit(968:545)&format=webp' />
                    <Typography component="h2" className="news-title" sx={{ paddingTop: '10px', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Liverpool, Man United, Arsenal and Tottenham, will seek compensation from Man City, if the 'citizens' are found guilty
                    </Typography>
                    <Typography sx={{ paddingTop: '12px', fontFamily: 'Roboto Mono' }}>
                        12.06.24
                    </Typography>
                </Link>
            </Box>
            <Box
                    sx={{
                        width: { xs: '100%', sm: '100%', md: '100%', lg: '30%', xl: '28%' },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover .news-title': {
                            color: '#1976d2 !important',
                        },
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    }}>
                    <Link to="/news" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column'}}>
                    <Box component="img" src='https://sportal365images.com/process/smp-images-production/sportal.bg/19052024/ac94e4b8-4b95-4101-b903-c96fb5f57682.jpg?operations=crop(80:551:5663:3692),fit(968:545)&format=webp' />
                    <Typography component="h2" className="news-title" sx={{ paddingTop: '10px', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Liverpool, Man United, Arsenal and Tottenham, will seek compensation from Man City, if the 'citizens' are found guilty
                    </Typography>
                    <Typography sx={{ paddingTop: '12px', fontFamily: 'Roboto Mono' }}>
                        12.06.24
                    </Typography>
                </Link>
            </Box>
            <Box
                    sx={{
                        width: { xs: '100%', sm: '100%', md: '100%', lg: '30%', xl: '28%' },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        '&:hover .news-title': {
                            color: '#1976d2 !important',
                        },
                        '&:hover': {
                            cursor: 'pointer',
                        },
                    }}>
                    <Link to="/news" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column'}}>
                    <Box component="img" src='https://sportal365images.com/process/smp-images-production/sportal.bg/19052024/ac94e4b8-4b95-4101-b903-c96fb5f57682.jpg?operations=crop(80:551:5663:3692),fit(968:545)&format=webp' />
                    <Typography component="h2" className="news-title" sx={{ paddingTop: '10px', fontFamily: 'Montserrat', fontWeight: 'bold', fontSize: '1.2rem' }}>
                        Liverpool, Man United, Arsenal and Tottenham, will seek compensation from Man City, if the 'citizens' are found guilty
                    </Typography>
                    <Typography sx={{ paddingTop: '12px', fontFamily: 'Roboto Mono' }}>
                        12.06.24
                    </Typography>
                </Link>
            </Box>
        </Box>
        </Box >
    )
}

export default TeamNews;