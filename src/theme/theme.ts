import {createTheme, Theme} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        iphoneSE: true;
        iphone14ProMax: true;
    }
}

const theme: Theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,    
            sm: 600,     
            md: 768,      
            lg: 1024,
            xl: 1440,
            iphoneSE: 375,
            iphone14ProMax: 430,
        }
    },
});

export default theme;