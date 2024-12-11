import { AppBar, Box, Grid, Toolbar, useMediaQuery } from "@mui/material";
import Tooltip from '@mui/material/Tooltip';
import theme from "../../theme/theme";
import { Link } from 'react-router-dom';
import {usePlTeamsData} from "../../hooks/usePlTeamsData.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";
import { TeamsResponse} from "../../store/slices/plTeamsSlice.ts";

const TeamAppBar = (): JSX.Element => {
    usePlTeamsData();

    const plTeams: TeamsResponse = useSelector((state: RootState): TeamsResponse => state.plTeams);

    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

    return (
        <>
            {isMobile ? (<Box sx={{ marginTop: '50px', borderTop: '2px solid white' }}>
                <AppBar position="static" color="default" sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    backgroundColor: '#f5f5f5',
                    maxHeight: '50px',
                }}>
                    <Toolbar sx={{ overflowX: 'auto', whiteSpace: 'nowrap', height: '100px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            {plTeams.teams.map((team) => (
                                <Tooltip key={team.id} title={team.shortName} placement="bottom-start">
                                    <Box
                                        component="img"
                                        src={team.crest}
                                        alt="team crest"
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            marginLeft: '20px',
                                            marginTop: '20px',
                                            [theme.breakpoints.down('sm')]: {
                                                width: 30,
                                                height: 30,
                                                marginLeft: '10px',
                                                marginTop: '10px',
                                            }
                                        }}
                                    />
                                </Tooltip>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>) : (
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
                                {plTeams.teams.map((team) => (
                                    <Tooltip title={team.shortName} placement="bottom-start">
                                        <Link to="/team-details">
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
                                        </Link>
                                    </Tooltip>
                                ))}
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Box>)}
        </>
    )
}

export default TeamAppBar;