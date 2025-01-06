import React from 'react';
import { Box } from '@mui/material';

const BlinkingDot: React.FC = () => {
    return (
        <Box
            sx={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'red',
                animation: 'blinking 1s infinite'
            }}
        >
            <style>
                {`
                    @keyframes blinking {
                        0% { opacity: 1; }
                        50% { opacity: 0; }
                        100% { opacity: 1; }
                    }
                `}
            </style>
        </Box>
    );
};

export default BlinkingDot;