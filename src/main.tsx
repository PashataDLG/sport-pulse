import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from './theme/theme.ts'
import { ThemeProvider } from '@mui/material/styles'
import { АppContextProvider } from './context/appContext.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<АppContextProvider>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</АppContextProvider>
	</StrictMode>,
);