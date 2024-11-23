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

interface ApiResponse {
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
        setStandings(state, action: PayloadAction<ApiResponse>) {
            return action.payload;
        }
    }
});