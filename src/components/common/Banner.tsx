import { Box, Button, Typography } from "@mui/material";
import { Parallax } from "react-parallax";
import { useAuth0 } from "@auth0/auth0-react";

const Banner: React.FC = (): JSX.Element => {

    const { loginWithRedirect } = useAuth0();

    return (
        <Parallax
            bgImage='https://t3.ftcdn.net/jpg/06/07/07/80/360_F_607078002_yMGIjR7oCK8fvvR8qD8hZ5EsXK7V8M7I.jpg'
            strength={500}
            bgImageStyle={{ height: '100%', width: '100%' }}
        >
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Box
                    sx={{
                        width: '100%',
                        height: '70vh',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        position: 'relative',
                    }}>
                    <Box sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '150%',
                        backgroundColor: 'rgba(0, 0, 0, 0.4)',
                        zIndex: 1
                    }} />
                    <Typography
                        variant="h4"
                        component="h1"
                        sx={{
                            color: 'white',
                            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',
                            zIndex: 2,
                            fontFamily: 'Bebas Neue',
                            fontSize: '3.5rem',
                            textAlign: 'center',
                            mt: 2,
                            mb: 1
                        }}
                    >
                        The ultimate Premier League event hub!<br />Your go-to source for the English Top Tier!
                    </Typography>
                    <Typography component="p" sx={{
                        textAlign: 'center',
                        fontSize: '1.3rem',
                        color: 'white',
                        fontFamily: 'Montserrat',
                        zIndex: 2,
                        mb: 2
                    }}>
                        Experience the electrifying action of the English Premier League.<br />Stay informed with real-time scores and updates.<br />Join us and immerse yourself in the excitement!
                    </Typography>
                    <Button color='inherit' sx={{
                        backgroundColor: '#00A4CC',
                        '&:hover': {
                            backgroundColor: '#007BAC',
                        },
                        padding: '12px 30px',
                        borderRadius: '20px',
                        color: 'white',
                        textTransform: 'none',
                        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.2)',
                        transition: 'background-color 0.3s',
                        zIndex: 2,
                        fontFamily: 'Montserrat',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        mt: 1
                    }}
                    onClick={() => loginWithRedirect()}
                    >
                        JOIN NOW!
                    </Button>
                </Box>
            </div>
        </Parallax>
    );
};

export default Banner;