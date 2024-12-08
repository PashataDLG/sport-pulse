import {Box, Container, useMediaQuery} from '@mui/material'
import TeamBanner from '../common/TeamBanner';
import UpcomingEvents from '../common/UpcomingEvents';
import TeamPageBar from '../common/TeamPageBar';
import {useTeamPageContext} from '../../context/teamPageContext';
import LiveEvents from '../common/LiveEvents';
import Standings from '../common/Standings';
import TeamNews from '../common/TeamNews';
import {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const teamLiveEvents = [
    {
        id: 1,
        homeTeam: 'Liverpool',
        awayTeam: 'Arsenal',
        scoreHomeTeam: 2,
        scoreAwayTeam: 1,
        time: '90:00',
        homeTeamGoals: 2,
        awayTeamGoals: 1
    },
    {
        id: 2,
        homeTeam: 'Liverpool',
        awayTeam: 'Arsenal',
        scoreHomeTeam: 2,
        scoreAwayTeam: 1,
        time: '90:00',
        homeTeamGoals: 2,
        awayTeamGoals: 1
    },
    {
        id: 3,
        homeTeam: 'Liverpool',
        awayTeam: 'Arsenal',
        scoreHomeTeam: 2,
        scoreAwayTeam: 1,
        time: '90:00',
        homeTeamGoals: 2,
        awayTeamGoals: 1
    },
    {
        id: 4,
        homeTeam: 'Liverpool',
        awayTeam: 'Arsenal',
        scoreHomeTeam: 2,
        scoreAwayTeam: 1,
        time: '90:00',
        homeTeamGoals: 2,
        awayTeamGoals: 1
    },
];

const TeamPage = (): JSX.Element => {
    const isMobile = useMediaQuery('(max-width:600px)');
    const location = useLocation();
    const {selectedButton, setSelectedButton} = useTeamPageContext();

    useEffect(() => {
        setSelectedButton(0);
    }, [location]);

    const renderContent = () => {
        switch (selectedButton) {
            case 0:
                return <TeamNews/>;
            case 1:
                return <LiveEvents events={teamLiveEvents} page="team"/>;
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
                    <TeamBanner/>
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
                    <TeamBanner/>
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