import { fetchLiveEventsData } from "../api/liveEventsApi.ts";
import { Dispatch, useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import {
    fetchLiveEventsSuccess,
    fetchLiveEventsFailure,
    LiveMatchesResponse
} from "../store/slices/liveEventsSlice";
import { useQuery } from "@tanstack/react-query";
import { UnknownAction } from "@reduxjs/toolkit";

export const useLiveEventsData = () => {
    const dispatch: Dispatch<UnknownAction> = useDispatch();
    const [enabled, setEnabled] = useState<boolean>(true);

    const { data, error, isError, isSuccess } = useQuery<LiveMatchesResponse, Error>({
        queryKey: ['liveEvents'],
        queryFn: fetchLiveEventsData,
        refetchInterval: (data) => {
            const liveData = data as unknown as LiveMatchesResponse; 
            return liveData.matches?.length ? 10000 : false;
        },
        enabled,
    });

    useEffect((): void => {
        if (isSuccess && data) {
            dispatch(fetchLiveEventsSuccess(data));
            setEnabled(false);
        } else if (isError && error) {
            dispatch(fetchLiveEventsFailure(error.message));
        }
    }, [isSuccess, data, isError, error, dispatch]);

    return { data, error, isError, isSuccess };
};
