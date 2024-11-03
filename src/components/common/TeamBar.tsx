import { AppBar, Avatar, Box, Grid, Toolbar } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';

interface Team {
    id: number;
    crest: string;
}

interface teams {
    teams: Team[];
}

const TeamAppBar: React.FC<teams> = ({ teams }): JSX.Element => {
    return (
        <Box sx={{ marginTop: '50px', borderTop: '2px solid white' }}>
            <AppBar position="static" color="default" sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                backgroundColor: '#f5f5f5',
                maxHeight: '100px',
            }}>
                <Toolbar>
                    <Grid container spacing={1} justifyContent="r">
                        {teams.map((team) => (
                            <Tooltip title="Liverpool" placement="bottom-start">
                                <Box
                                    component="img"
                                    src={team.crest}
                                    alt="team crest"
                                    sx={{
                                        width: 38,
                                        height: 38,
                                        paddingLeft: '20px',
                                        paddingTop: '20px',
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'scale(1.3)',
                                            cursor: 'pointer'
                                        }
                                    }}
                                />
                            </Tooltip>
                        ))}
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TeamAppBar;