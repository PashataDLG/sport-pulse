import axios, {AxiosResponse} from 'axios';
import { TeamsResponse } from  '../store/slices/plTeamsSlice';

export const fetchPlTeams: () => Promise<TeamsResponse> = async (): Promise<TeamsResponse> => {
    const response: AxiosResponse<TeamsResponse> = await axios.get(
        'https://api.football-data.org/v4/competitions/PL/teams',
        {
            headers: {
                'X-Auth-Token': '2b592fd358af4ea9b527e71282c29c54',
            },
        }
    );
    return response.data;
};