import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Area, Season, Competition, Team} from './upcomingEventsSlice';
import {WritableDraft} from "immer";

interface Filters {
    dateFrom: string;
    dateTo: string;
    permission: string;
    status: string[];
}

interface ResultSet {
    count: number;
    competitions: string;
    first: string;
    last: string;
    played: number;
}

interface ScoreDetail {
    home: number | null;
    away: number | null;
}

interface Score {
    winner: string;
    duration: string;
    fullTime: ScoreDetail;
    halfTime: ScoreDetail;
}

interface Match {
    area: Area;
    competition: Competition;
    season: Season;
    id: number;
    utcDate: string;
    status: string;
    matchday: number;
    stage: string;
    group: string | null;
    lastUpdated: string;
    homeTeam: Team;
    awayTeam: Team;
    score: Score;
}

export interface LiveMatchesResponse {
    filters: Filters;
    resultSet: ResultSet;
    matches: Match[];
}

interface State {
    filters: Filters;
    resultSet: ResultSet;
    matches: Match[];
    error: string | null;
}

const initialState: State = {
    filters: {
        dateFrom: '',
        dateTo: '',
        permission: '',
        status: [],
    },
    resultSet: {
        count: 0,
        competitions: '',
        first: '',
        last: '',
        played: 0,
    },
    matches: [],
    error: null,
}

const liveEventsSlice = createSlice({
    name: 'liveEvents',
    initialState,
    reducers: {
        fetchLiveEventsSuccess(state: WritableDraft<State>, action: PayloadAction<State>): void {
            state.filters = action.payload.filters;
            state.matches = action.payload.matches;
            state.resultSet = action.payload.resultSet;
        },
        fetchLiveEventsFailure(state: WritableDraft<State>, action: PayloadAction<string>): void {
            state.matches = [];
            state.error = action.payload;
        }
    }
});

export const {fetchLiveEventsSuccess, fetchLiveEventsFailure} = liveEventsSlice.actions;
export default liveEventsSlice.reducer;