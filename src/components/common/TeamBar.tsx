import { AppBar, IconButton, Toolbar } from "@mui/material";
import Grid2 from '@mui/material/Grid2';
import MenuIcon from '@mui/icons-material/Menu';

interface Team {
    id: number;
    crest: string;
}

interface teams {
    teams: Team[];
}

const TeamAppBar: React.FC<teams> = ({ teams }): JSX.Element => {
    return (
        <AppBar position="static" color="default">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>cente
                <Grid container spacing={2} justifyContent="r">
                    {teams.map((team) => (
                        <Grid item key={team.id}>
                            <img src={team.crest} alt={`Team ${team.id} Crest`} style={{ width: 50, height: 50, borderRadius: '50%' }} />
                        </Grid>
                    ))}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default TeamAppBar;