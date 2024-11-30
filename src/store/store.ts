import { configureStore } from '@reduxjs/toolkit';
import standingsReducer from './slices/standingsSlice';
import upcomingEventsReducer from './slices/upcomingEventsSlice';

const store = configureStore({
    reducer: {
        standings: standingsReducer,
        upcomingEvents: upcomingEventsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;