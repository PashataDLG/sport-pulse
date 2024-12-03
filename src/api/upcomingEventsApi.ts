import axios from 'axios';
import { getTodayDate} from "../utils/getTodayDate.ts";

export const fetchUpcomingEvents = async () => {
    const todayDate: string = getTodayDate();

    const response = await axios.get(
        `https://api.football-data.org/v4/competitions/PL/matches?dateFrom=${todayDate}&dateTo=${todayDate}`,
        {
            headers: {
                'X-Auth-Token': '2b592fd358af4ea9b527e71282c29c54',
            },
        }
    );
    return response.data;
};