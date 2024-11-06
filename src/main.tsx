import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from './theme/theme.ts'
import { ThemeProvider } from '@mui/material/styles'
import { АppContextProvider } from './context/appContext.tsx'
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Router>
			<АppContextProvider>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</АppContextProvider>
		</Router>
	</StrictMode>,
);