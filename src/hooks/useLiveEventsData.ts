import {fetchLiveEventsData} from "../api/liveEventsApi.ts";
import {Dispatch, useEffect, useState} from "react";
import {useDispatch} from 'react-redux';
import {
    fetchLiveEventsSuccess,
    fetchLiveEventsFailure,
    LiveMatchesResponse
} from "../store/slices/liveEventsSlice";
import {useQuery} from "@tanstack/react-query";
import {UnknownAction} from "@reduxjs/toolkit";


export const useLiveEventsData = () => {
    const dispatch: Dispatch<UnknownAction> = useDispatch();
    const [enabled, setEnabled] = useState<boolean>(true);

    const {data, error, isError, isSuccess} = useQuery<LiveMatchesResponse, Error>({
        queryKey: ['liveEvents'],
        queryFn: fetchLiveEventsData,
        enabled,
    });

    useEffect((): void => {
        if(isSuccess && data) {
            dispatch(fetchLiveEventsSuccess(data));
            setEnabled(false);
        }
        else if (isError && error) {
            dispatch(fetchLiveEventsFailure((error as Error).message));
        }
    }, [data, error, isError, isSuccess])

    return {data, error, isError, isSuccess};
};