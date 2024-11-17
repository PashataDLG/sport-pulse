import {createTheme, Theme} from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        md: true;
        lg: true;
        xl: true;
        zFold5: true;
        iphoneSE: true;
        iphone12ProMax: true;
        iphone14ProMax: true;
        surfaceDuo: true;
    }
}

const theme: Theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            zFold5: 344,
            iphoneSE: 375,
            iphone12ProMax: 390,
            iphone14ProMax: 430,
            surfaceDuo: 540,
            sm: 600,
            md: 768,
            lg: 1024,
            xl: 1440,
        }
    },
});

export default theme;