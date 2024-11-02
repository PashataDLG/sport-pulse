import { AppBar, Avatar, Box, Grid, Toolbar } from "@mui/material";

interface Team {
    id: number;
    crest: string;
}

interface teams {
    teams: Team[];
}

const TeamAppBar: React.FC<teams> = ({ teams }): JSX.Element => {
    return (
        <Box sx={{marginTop: '55px', borderTop: '2px solid white'}}>
            <AppBar position="static" color="default" sx={{
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'row',
                backgroundColor: '#f5f5f5',
                maxHeight: '100px',
            }}>
                <Toolbar>
                    <Grid container spacing={2} justifyContent="r">
                        {teams.map((team) => (
                            <Box
                            component="img"
                            src={team.crest}
                            alt="team crest"
                            sx={{ width: 45, height: 45, paddingLeft: '20px',
                            paddingTop: '20px'
                             }}
                        />
                        ))}
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default TeamAppBar;