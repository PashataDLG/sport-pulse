import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from './theme/theme.ts'
import { ThemeProvider } from '@mui/material/styles'
import { АppContextProvider } from './context/appContext.tsx'
import { BrowserRouter as Router } from 'react-router-dom';
import { TeamPageProvider } from './context/teamPageContext.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<TeamPageProvider>
				<АppContextProvider>
					<ThemeProvider theme={theme}>
						<App />
					</ThemeProvider>
				</АppContextProvider>
			</TeamPageProvider>
		</Router>
	</StrictMode>,
);