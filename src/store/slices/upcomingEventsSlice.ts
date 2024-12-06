import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer';

export interface Filters {
    season: string;
}

interface ResultSet {
    count: number;
    first: string;
    last: string;
    played: number;
}

export interface Competition {
    id: number;
    name: string;
    code: string;
    type: string;
    emblem: string;
}

export interface Area {
    id: number;
    name: string;
    code: string;
    flag: string;
}

export interface Season {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: string | null;
}

export interface Team {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
}

export interface ScoreDetails {
    home: number | null;
    away: number | null;
}

export interface Score {
    winner: string | null;
    duration: string;
    fullTime: ScoreDetails;
    halfTime: ScoreDetails;
}

export interface Odds {
    msg: string;
}

export interface Match {
    area: Area;
    competition: Competition;
    season: Season;
    id: number;
    utcDate: string; // ISO datetime string (e.g., "2024-11-30T15:00:00Z")
    status: string;
    matchday: number;
    stage: string;
    group: string | null;
    lastUpdated: string; // ISO datetime string (e.g., "2024-11-30T00:20:52Z")
    homeTeam: Team;
    awayTeam: Team;
    score: Score;
    odds: Odds;
}

export interface MatchesResponse {
    filters: Filters;
    resultSet: ResultSet;
    competition: Competition;
    matches: Match[];
}

interface UpcomingEventsState {
    filters: Filters;
    resultSet: ResultSet;
    competition: Competition;
    matches: Match[];
    error: string | null;
}

const initialState: UpcomingEventsState = {
    filters: {
        season: '',
    },
    resultSet: {
        count: 0,
        first: '',
        last: '',
        played: 0,
    },
    competition: {
        id: 0,
        name: '',
        code: '',
        type: '',
        emblem: '',
    },
    matches: [],
    error: null,
};

const upcomingEventsSlice = createSlice({
    name: 'upcomingEvents',
    initialState,
    reducers: {
        fetchUpcomingEventsStart(state: WritableDraft<MatchesResponse>,): void {
            state.matches = [];
        },
        fetchUpcomingEventsSuccess(state: WritableDraft<MatchesResponse>, action: PayloadAction<MatchesResponse>): void {
            state.filters = action.payload.filters;
            state.resultSet = action.payload.resultSet;
            state.competition = action.payload.competition;
            state.matches = action.payload.matches;
        },
        fetchUpcomingEventsFailure(state: WritableDraft<UpcomingEventsState>, action: PayloadAction<string>): void {
            state.matches = [];
            state.error = action.payload;
        },
    },
});

export const { fetchUpcomingEventsStart, fetchUpcomingEventsSuccess, fetchUpcomingEventsFailure } = upcomingEventsSlice.actions;
export default upcomingEventsSlice.reducer;