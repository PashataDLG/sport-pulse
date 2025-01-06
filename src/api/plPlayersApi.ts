import axios, { AxiosInstance } from 'axios';
import { TeamPlayersResponse } from '../store/slices/playersSlice';

const playersApiClient: AxiosInstance = axios.create({
    baseURL: `https://api.football-data.org/v4/teams`,
    headers: {
        'X-Auth-Token': '2b592fd358af4ea9b527e71282c29c54',
    },
});

export const fetchPlayersData: (teamId: number) => Promise<TeamPlayersResponse> = async (teamId: number) => {
    try {
        const response = await playersApiClient.get(`/${teamId}`);

        return response.data;
    } catch (error) {
        throw new Error('Failed to fetch live events data');
    }
};