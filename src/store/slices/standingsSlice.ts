import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Area, Season } from './upcomingEventsSlice';

export interface Filters {
    season: string;
}

export interface Competition {
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
    crest: string
}

export interface TableEntry {
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

interface StandingsState {
    table: TableEntry[]; // Only store the table data
    loading: boolean;
    error: string | null;
}

export interface ApiResponse {
    area: Area,
    season: Season,
    filters: Filters,
    competition: Competition,
    standings: StandingsState[],
}

const initialState: StandingsState = {
    table: [],
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
        fetchStandingsSuccess(state, action: PayloadAction<TableEntry[]>) {
            state.table = action.payload; // Directly assign table data
            state.loading = false;
        },
        fetchStandingsFailure(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchStandingsStart, fetchStandingsSuccess, fetchStandingsFailure } = standingsSlice.actions;

export default standingsSlice.reducer;