import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Competition {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
}

interface Team {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
}

interface TableEntry {
    position: number;
    team: Team;
    playedGames: number;
    form: string;
    won: number;
    draw: number;
    lost: number;
    points: number;
    goalsFor: number;
    goalsAgainst: number;
    goalDifference: number;
}

interface Standings {
    table: TableEntry[];
}

export interface ApiResponse {
    competition: Competition;
    standings: Standings[];
}

interface StandingsState {
    competition: Competition | null;
    standings: TableEntry[];
    loading: boolean;
    error: string | null;
}

const initialState: StandingsState = {
    competition: null,
    standings: [],
    loading: false,
    error: null,
};

const standingsSlice = createSlice({
    name: 'standings',
    initialState,
    reducers: {
        fetchStandingsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchStandingsSuccess(state, action: PayloadAction<ApiResponse>) {
            state.competition = action.payload.competition;
            state.standings = action.payload.standings[0].table;
            state.loading = false;
        },
        fetchStandingsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    }
});

export const { fetchStandingsStart, fetchStandingsSuccess, fetchStandingsFailure } = standingsSlice.actions;

export default standingsSlice.reducer;