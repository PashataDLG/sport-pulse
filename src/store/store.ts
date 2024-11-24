import { configureStore } from '@reduxjs/toolkit';
import standingsReducer from './slices/standingsSlice';

const store = configureStore({
    reducer: {
        standings: standingsReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;