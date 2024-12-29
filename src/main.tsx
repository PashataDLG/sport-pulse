import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx'
import './index.css'
import theme from './theme/theme.ts'
import { ThemeProvider } from '@mui/material/styles'
import { AppContextProvider } from './context/appContext.tsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { TeamPageProvider } from './context/teamPageContext.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux';
import store from "./store/store.ts";

const queryClient = new QueryClient();

const domain: string = process.env.REACT_APP_AUTH0_DOMAIN as string;
const clientId: string = process.env.REACT_APP_AUTH0_CLIENT_ID as string;

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <Auth0Provider 
                domain={domain}
                clientId={clientId}
                authorizationParams={{
                    redirect_uri: window.location.origin,
                  }}>
                <QueryClientProvider client={queryClient}>
                    <Router>
                        <TeamPageProvider>
                            <AppContextProvider>
                                <ThemeProvider theme={theme}>
                                    <App />
                                </ThemeProvider>
                            </AppContextProvider>
                        </TeamPageProvider>
                    </Router>
                </QueryClientProvider>
            </Auth0Provider>
        </Provider>
    </StrictMode>
);