import axios from 'axios';

export const fetchUpcomingEvents = async ()=> {
    const response = await axios.get(
        'https://api.football-data.org/v4/competitions/PL/standings?season=2024',
        {
            headers: {
                'X-Auth-Token': '2b592fd358af4ea9b527e71282c29c54',
            },
        }
    );
    return response.data;
};