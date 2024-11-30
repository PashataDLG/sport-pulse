import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WritableDraft } from 'immer';

interface Filters {
    season: string;
}

interface ResultSet {
    count: number;
    first: string;
    last: string;
    played: number;
}

interface Competition {
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
    startDate: string; // ISO date string (e.g., "2024-08-16")
    endDate: string;   // ISO date string (e.g., "2025-05-25")
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

const initialState: MatchesResponse = {
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
        fetchUpcomingEventsFailure(state: WritableDraft<MatchesResponse>,): void {
            state.matches = [];
        },
    },
});

export const { fetchUpcomingEventsStart, fetchUpcomingEventsSuccess, fetchUpcomingEventsFailure } = upcomingEventsSlice.actions;
export default upcomingEventsSlice.reducer;