import {useQuery} from '@tanstack/react-query';
import {useDispatch} from 'react-redux';
import {fetchStandingsData} from '../api/standingsApi';
import {fetchStandingsSuccess, fetchStandingsFailure} from '../store/slices/standingsSlice';
import type {ApiResponse} from '../store/slices/standingsSlice';

export const useStandings = () => {
    const dispatch = useDispatch();

    const {data, error, isError, isSuccess} = useQuery<ApiResponse, Error>({
        queryKey: ['standings'],
        queryFn: fetchStandingsData,
        enabled: true,
    });

    if (isSuccess && data) {
        dispatch(fetchStandingsSuccess(data));
    } else if (isError && error) {
        dispatch(fetchStandingsFailure((error as Error).message));
    }

    return {data, error};
};