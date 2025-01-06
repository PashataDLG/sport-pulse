import axios from 'axios';
import { getDates } from "../utils/getDates.ts";

export const fetchUpcomingEvents = async () => {
    try {
        const { todayDate, next7DaysDate } = getDates();

        const response = await axios.get(
            `https://api.football-data.org/v4/competitions/PL/matches?dateFrom=${todayDate}&dateTo=${next7DaysDate}`,
            {
                headers: {
                    'X-Auth-Token': '2b592fd358af4ea9b527e71282c29c54',
                },
            }
        );
        return response.data;
    } catch (error) {
        throw new Error(`Failed to fetch upcoming events. Error message: ${error}`);
    }
};