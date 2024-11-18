import React from 'react';
import { Box, Typography } from "@mui/material";
import { Tweet } from 'react-twitter-widgets'

const NewsPage: React.FC = (): JSX.Element => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '62%',
                marginTop: '20px',
            }}>
                <Typography sx={{
                    fontSize: '2rem',
                    fontFamily: 'Montserrat',
                    fontWeight: 'bold',
                    textAlign: 'start',
                    paddingLeft: '15px'
                }}>
                    Liverpool, Man United, Arsenal and Tottenham, will seek compensation from Man City, if the
                    'citizens' are found guilty
                </Typography>
                <Box sx={{ display: 'flex', alignContent: 'flex-start', width: '100%', height: '2%' }}>
                    <Typography sx={{
                        fontSize: '.9rem',
                        fontFamily: 'Roboto Mono',
                        paddingLeft: '15px',
                        paddingTop: '10px'
                    }}>
                        12.06.24 | 12:34
                    </Typography>
                </Box>
                <Box component='img'
                    src='https://sportal365images.com/process/smp-images-production/sportal.bg/19052024/ac94e4b8-4b95-4101-b903-c96fb5f57682.jpg?operations=crop(80:551:5663:3692),fit(968:545)&format=webp'
                    alt='news' sx={{ width: '100%', paddingTop: '3%', height: '70%' }}
                />
                {/* News text box*/}
                <Box sx={{ padding: '15px' }}>
                    <Typography sx={{
                        textAlign: 'start',
                        fontFamily: 'Roboto',
                        margin: '10px 0px 20px 0px',
                        fontSize: '1.2rem'
                    }}>
                        Liverpool, Manchester United, Arsenal, and Tottenham have filed legal notices expressing their
                        intention to seek compensation from Manchester City if the "Citizens" are found guilty in the
                        major case regarding financial violations. According to "The Times," the four clubs have
                        registered their potential claims now, before the statutory six-year limitation period expires.
                        Although Manchester City's alleged rule violations date back to 2009, the clubs' lawyers have
                        determined that the six-year limitation period for legal consequences related to these breaches
                        starts from November 5, 2018, when Der Spiegel first published the documents from Football
                        Leaks, bringing the alleged violations to public attention.
                    </Typography>
                    <Box sx={{ padding: '0px 15px 15px 15px', display: 'flex', justifyContent: 'center' }}>
                        <Box sx={{ width: '100%', maxWidth: '550px' }}>
                            <Tweet tweetId="1856734767468720499" />
                        </Box>
                    </Box>
                    <Typography
                        sx={{ textAlign: 'start', fontFamily: 'Roboto', marginBottom: '20px', fontSize: '1.2rem' }}>
                        If the charges against City are proven, the clubs could file claims for financial losses due to
                        missed titles or qualification for the Champions League and other European tournaments over
                        several seasons. Such losses could amount to hundreds of millions.
                    </Typography>
                    <Typography
                        sx={{ textAlign: 'start', fontFamily: 'Roboto', marginBottom: '20px', fontSize: '1.2rem' }}>
                        The final verdict in the case regarding the 115 charges brought by the Premier League against
                        City is expected by the end of the season, with the possibility of further appeals.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default NewsPage;