import axios, { AxiosResponse } from 'axios';
import { LiveMatchesResponse } from "../store/slices/liveEventsSlice.ts";

export const fetchLiveEventsData: () => Promise<LiveMatchesResponse> = async (): Promise<LiveMatchesResponse> => {
    try {
        const response: AxiosResponse<LiveMatchesResponse> = await axios.get(
            'https://api.football-data.org/v4/matches?status=LIVE',
            {
                headers: {
                    'X-Auth-Token': '2b592fd358af4ea9b527e71282c29c54',
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching live events data:', error);
        throw new Error('Failed to fetch live events data');
    }
};