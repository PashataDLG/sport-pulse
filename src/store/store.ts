import { configureStore } from '@reduxjs/toolkit';
import standingsReducer from './slices/standingsSlice';
import upcomingEventsReducer from './slices/upcomingEventsSlice';
import liveEventsReducer from './slices/liveEventsSlice';
import plTeamsReducer from './slices/plTeamsSlice';
import playersReducer from './slices/playersSlice';

const store = configureStore({
    reducer: {
        standings: standingsReducer,
        upcomingEvents: upcomingEventsReducer,
        liveEvents: liveEventsReducer,
        plTeams: plTeamsReducer,
        plPlayers: playersReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;