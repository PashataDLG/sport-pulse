import {useQuery} from '@tanstack/react-query';
import {useDispatch} from 'react-redux';
import {fetchStandingsData} from '../api/standingsApi';
import {fetchStandingsSuccess, fetchStandingsFailure} from '../store/slices/standingsSlice';
import type {ApiResponse} from '../store/slices/standingsSlice';
import {Dispatch, useEffect, useState} from 'react';
import {UnknownAction} from "@reduxjs/toolkit";

export const useStandingsData = () => {
    const dispatch: Dispatch<UnknownAction> = useDispatch();
    const [enabled, setEnabled] = useState(true);

    const {data, error, isError, isSuccess} = useQuery<ApiResponse, Error>({
        queryKey: ['standings'],
        queryFn: fetchStandingsData,
        enabled,
    });

    useEffect((): void => {
        if (isSuccess && data) {
            dispatch(fetchStandingsSuccess(data?.standings[0].table));
            setEnabled(false);
        } else if (isError && error) {
            dispatch(fetchStandingsFailure((error as Error).message));
        }
    }, [isSuccess, isError, data, error, dispatch]);

    return {data, error, isError, isSuccess};
};