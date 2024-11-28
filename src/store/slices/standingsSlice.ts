import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface TableEntry {
    position: number;
    team: { id: number; name: string; shortName: string; tla: string; crest: string };
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