import { useDispatch, useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import { fetchStandingsSuccess, fetchStandingsFailure, ApiResponse } from '../store/slices/standingsSlice';
import { RootState } from '../store/store';
import { fetchStandingsData } from '../api/standingsApi';

export const useStandings = () => {
    const dispatch = useDispatch();
    const { competition, standings, loading, error } = useSelector((state: RootState) => state.standings);

    const { data, error: queryError, isLoading } = useQuery<ApiResponse, Error>({
        queryKey: ['standings'],
        queryFn: fetchStandingsData,
        onSuccess: (data) => {
            dispatch(fetchStandingsSuccess(data));
        },
        onError: (error) => {
            if (error instanceof Error) {
                dispatch(fetchStandingsFailure(error.message));
            } else {
                dispatch(fetchStandingsFailure('An unknown error occurred'));
            }
        },
    });

    return { competition, standings, loading, error, isLoading };
};