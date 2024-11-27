import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    stage: string;
    type: string;
    group: string;
    table: TableEntry[];
}

interface Filters {
    season: string;
}

interface Area {
    id: number;
    name: string;
    code: string;
    flag: string;
}

interface Competition {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
};

interface Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: string | null;
}

export interface ApiResponse {
    filters: Filters;
    area: Area;
    competition: Competition;
    season: Season;
    standings: Standings[];
}

interface StandingsState extends ApiResponse {
    loading: boolean;
    error: string | null;
};

const initialState: StandingsState = {
    filters: {
        season: '', // Matches Filters interface
    },
    area: {
        id: 0,
        name: '',
        code: '',
        flag: '',
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
        winner: null,
    },
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
            state.standings = [
                {
                  stage: action.payload.standings[0].stage,
                  type: action.payload.standings[0].type,
                  group: action.payload.standings[0].group,
                  table: action.payload.standings[0].table,
                },
              ];
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