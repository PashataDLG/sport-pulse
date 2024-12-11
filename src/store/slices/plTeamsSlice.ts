import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Filters, Competition } from "./standingsSlice";
import { Area, Season } from "./upcomingEventsSlice";

interface Team {
    area: Area
    id: number,
    name: string,
    shortName: string,
    tla: string,
    crest: string,
    address: string,
    website: string,
    founded: 1886,
    clubColors: string,
    venue: string,
}

interface ApiResponse {
    count: number,
    filters: Filters,
    competition: Competition,
    season: Season,
    teams: Team[],
}

const initialState: ApiResponse = {
    count: 0,
    filters: {
        season: '',
    },
    competition: {
        id: 0,
        name: '',
        code: '',
        type: '',
        emblem: '',
    },
    season: {
        id: 0,
        startDate: '',
        endDate: '',
        currentMatchday: 0,
        winner: '',
    },
    teams: [],
};

const plTeams = createSlice({
    name: 'plTeams',
    initialState,
    reducers: {
        fetchPlTeams(state: ApiResponse, action: PayloadAction<ApiResponse>) {
            state.teams = action.payload.teams;
        },
    },
});

export const { fetchPlTeams } = plTeams.actions;
export default plTeams.reducer;