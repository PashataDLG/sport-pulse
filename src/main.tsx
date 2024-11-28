import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from './theme/theme.ts'
import {ThemeProvider} from '@mui/material/styles'
import {AppContextProvider} from './context/appContext.tsx'
import {BrowserRouter as Router} from 'react-router-dom';
import {TeamPageProvider} from './context/teamPageContext.tsx'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {Provider} from 'react-redux';
import store from "./store/store.ts";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <TeamPageProvider>
                        <AppContextProvider>
                            <ThemeProvider theme={theme}>
                                <App/>
                            </ThemeProvider>
                        </AppContextProvider>
                    </TeamPageProvider>
                </Router>
            </QueryClientProvider>
        </Provider>
    </StrictMode>
);