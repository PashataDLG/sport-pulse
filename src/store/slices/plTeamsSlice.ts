import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface TeamsResponse {
    teams: Team[]
}

export interface Team {
    idTeam: string,
    idAPIfootball: string,
    strTeam: string,
    strTeamAlternate: string,
    strTeamShort: string,
    strStadium: string,
    strDescriptionEN: string,
    strCounter: string,
    strBadge: string,
}

interface TeamsState {
    teams: Team[];
    loading: boolean;
    error: string | null;
}

const initialState: TeamsState = {
    teams: [],
    loading: false,
    error: null,
};

const plTeams = createSlice({
    name: 'plTeams',
    initialState,
    reducers: {
        fetchPlTeamsSuccess(state: TeamsResponse, action: PayloadAction<TeamsResponse>) {
            state.teams = action.payload.teams;
        },
    },
});

export const { fetchPlTeamsSuccess } = plTeams.actions;
export default plTeams.reducer;