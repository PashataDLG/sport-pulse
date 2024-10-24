import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,    
            sm: 600,     
            md: 768,      
            lg: 1024,    
            xl: 1440   
        }
    },
});

export default theme;