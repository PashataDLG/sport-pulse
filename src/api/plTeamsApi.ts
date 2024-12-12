import axios, { AxiosResponse } from 'axios';
import { TeamsResponse } from '../store/slices/plTeamsSlice';

export const fetchPlTeams: () => Promise<TeamsResponse> = async (): Promise<TeamsResponse> => {
    const response: AxiosResponse<TeamsResponse> = await axios.get('https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League');

    return response.data;
};