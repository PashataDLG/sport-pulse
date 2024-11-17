import React from 'react';
import {Box, Typography} from "@mui/material";

const NewsPage: React.FC = (): JSX.Element => {
    return (
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '62%',
                marginTop: '20px',
                border: '0.1px solid grey'
            }}>
                <Typography sx={{fontSize: '2rem', fontFamily: 'Montserrat', fontWeight: 'bold', textAlign: 'start', paddingLeft: '15px'}}>
                    Liverpool, Man United, Arsenal and Tottenham, will seek compensation from Man City, if the
                    'citizens' are found guilty
                </Typography>
                <Box component='img' src='https://sportal365images.com/process/smp-images-production/sportal.bg/19052024/ac94e4b8-4b95-4101-b903-c96fb5f57682.jpg?operations=crop(80:551:5663:3692),fit(968:545)&format=webp' alt='news' sx={{ width: '100%', paddingTop: '3%', height: '70%' }} />
            </Box>
        </Box>
    );
};

export default NewsPage;