import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface TeamPlayersResponse {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    coach: Coach;
    squad: Player[];
}

interface Coach {
    id: number;
    firstName: string;
    lastName: string;
    name: string;
    dateOfBirth: string;
    nationality: string;
}

interface Player {
    id: number;
    name: string;
    position: string;
    dateOfBirth: string;
    countryOfBirth: string;
}

const initialState: TeamPlayersResponse = {
    id: 0,
    name: '',
    shortName: '',
    tla: '',
    crest: '',
    address: '',
    website: '',
    founded: 0,
    clubColors: '',
    venue: '',
    coach: {
        id: 0,
        firstName: '',
        lastName: '',
        name: '',
        dateOfBirth: '',
        nationality: '',
    },
    squad: [],
};

const playersSlice = createSlice({
    name: 'teamPlayers',
    initialState,
    reducers: {
        fetchTeamSuccess(state: TeamPlayersResponse, action: PayloadAction<TeamPlayersResponse>) {
            state.coach = action.payload.coach;
            state.squad = action.payload.squad;
        },
    },
});

export const { fetchTeamSuccess } = playersSlice.actions;
export default playersSlice.reducer;