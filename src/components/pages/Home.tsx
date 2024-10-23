import { Box, Typography } from '@mui/material';

const Home = (): JSX.Element => {
    return (
        <Box sx={{ margin: '0', padding: '0', width: '100%', position: 'relative' }}>
            {/* Sports Banner */}
            <Box
                component="img"
                src="/AdobeStock_286933595_Preview.jpeg" // Path to your sports banner image
                alt="Sports Banner"
                sx={{ width: '100%', height: 'auto', objectFit: 'cover', }}
            />
            <Typography
                variant="h4"
                component="h1"
                sx={{
                    position: 'absolute',
                    top: '25%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)', // Center the text
                    color: 'white',
                    textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7)',  // Shadow for better visibility
                    zIndex: 1, // Ensure text is above the image
                    fontFamily: 'Radley Sans',
                    fontSize: '3rem',
                }}
            >
                The best sport <br /> event website!
            </Typography>

        </Box>
    );
};

export default Home;