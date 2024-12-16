import {Box, Button, Typography} from '@mui/material';
import {MdOutlineNextWeek} from 'react-icons/md';
import {useTeamPageContext} from '../../context/teamPageContext';
import {IoMdPodium} from "react-icons/io";
import {FaRegNewspaper} from "react-icons/fa6";
import { GiBabyfootPlayers } from 'react-icons/gi';

const TeamPageBar = () => {
    const {handleButtonClick} = useTeamPageContext();

    const buttons = [
        {label: 'Team News', icon: <FaRegNewspaper size={18} style={{marginRight: '8px', color: '#1976d2'}}/>},
        {label: 'Squad', icon: <GiBabyfootPlayers size={18} style={{marginRight: '8px', color: '#1976d2'}}/>},
        {label: 'Upcoming Events', icon: <MdOutlineNextWeek size={18} style={{marginRight: '8px', color: '#1976d2'}}/>},
        {label: 'Standings', icon: <IoMdPodium size={18} style={{marginRight: '8px', color: '#1976d2'}}/>},
    ]

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: {xs: 'column', sm: 'column', md: 'column', lg: 'column', xl: 'row'},
            gap: '15px',
            maxWidth: '100%',
            marginTop: { zFold5: '25%', xs: '50%', sm: '40%', md: '30%', lg: '20px', iphoneSE: '55%', iphone12ProMax: '25%', surfaceDuo: '50%'},
        }}>
            {buttons.map((button, index) => (
                <Button
                    key={index}
                    onClick={() => handleButtonClick(index)}
                    sx={{
                        padding: '10px 20px',
                        color: '#1976d2',
                        borderRadius: '20px',
                        '&:hover': {
                            color: '#1976d2',
                        },
                    }}>
                    <Typography sx={{
                        fontFamily: 'Montserrat',
                        fontWeight: 'bolder',
                        fontSize: '1.2rem',
                    }}>
                        {button.icon}
                        {button.label}
                    </Typography>
                </Button>
            ))}
        </Box>
    )
}

export default TeamPageBar