import { Box } from '@mui/material';
import { styled } from '@mui/system';

interface StyledBoxProps {
    page: 'team' | 'home';
}

const StyledBox = styled(Box)<StyledBoxProps>(({ theme, page }) => ({
	width: page === 'team' ? '89%' : '32.5%',
	gap: theme.spacing(2),
	[theme.breakpoints.down('md')]: {
		width: '100%',
		padding: theme.spacing(2),
	},
}));

export default StyledBox;