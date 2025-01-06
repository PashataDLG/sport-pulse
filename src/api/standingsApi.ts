import axios from 'axios';

export const fetchStandingsData = async () => {
    try {
        const response = await axios.get(
            'https://api.football-data.org/v4/competitions/PL/standings?season=2024',
            {
                headers: {
                    'X-Auth-Token': '2b592fd358af4ea9b527e71282c29c54',
                },
            }
        );
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch standings data. Error message: ${error}`);
    }
};