import {Box, Container, useMediaQuery} from '@mui/material'
import TeamBanner from '../common/TeamBanner';
import UpcomingEvents from '../common/UpcomingEvents';
import TeamPageBar from '../common/TeamPageBar';
import {useTeamPageContext} from '../../context/teamPageContext';
import LiveEvents from '../common/LiveEvents';
import Standings from '../common/Standings';
import TeamNews from '../common/TeamNews';
import {useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {Team, TeamsResponse} from "../../store/slices/plTeamsSlice.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../store/store.ts";

const TeamPage = (): JSX.Element => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const location = useLocation();
    const {selectedButton, setSelectedButton} = useTeamPageContext();
    const { teamId } = useParams<{teamId: string}>();
    const plTeams: TeamsResponse = useSelector((state: RootState): TeamsResponse => state.plTeams);
    const team: Team = plTeams.teams.find((team: Team) => Number(team.idTeam) === parseInt(teamId ?? '0')) as Team;

    useEffect(() => {
        setSelectedButton(0);
    }, [location]);

    const renderContent = () => {
        switch (selectedButton) {
            case 0:
                return <TeamNews/>;
            case 1:
                return <LiveEvents page="team"/>;
            case 2:
                return <UpcomingEvents page='team'/>;
            case 3:
                return <Standings page="team"/>;
            default:
                return null;
        }
    }

    return (
        <>
            {isMobile ?
                <Container maxWidth="xl" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '0'
                }}>
                    <TeamBanner team={team}/>
                    <TeamPageBar/>
                    <Box
                        sx={{flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                        {renderContent()}
                    </Box>
                </Container>
                :
                <Container maxWidth="xl" sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '0'
                }}>
                    <TeamBanner team={team}/>
                    <TeamPageBar/>
                    <Box
                        sx={{flexGrow: 1, width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                        {renderContent()}
                    </Box>
                </Container>
            }
        </>
    )
}

export default TeamPage;