import axios from 'axios';
import { ApiResponse } from '../store/slices/standingsSlice';

export const fetchStandingsData = async (): Promise<ApiResponse> => {
    const response = await axios.get<ApiResponse>(`https://api.football-data.org/v4/competitions/PL/standings?season=2024`, {
        headers: {
            'X-Auth-Token': '2b592fd358af4ea9b527e71282c29c54',
        },
    });

    return response.data;
};
