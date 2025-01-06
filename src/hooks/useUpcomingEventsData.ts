import {fetchUpcomingEvents} from "../api/upcomingEventsApi.ts";
import {useQuery} from '@tanstack/react-query';
import {useDispatch} from "react-redux";
import {UnknownAction} from "@reduxjs/toolkit";
import {Dispatch, useEffect, useState} from "react";
import {
    fetchUpcomingEventsFailure,
    fetchUpcomingEventsSuccess,
    MatchesResponse
} from "../store/slices/upcomingEventsSlice.ts";

export const useUpcomingEventsData = () => {
    const dispatch: Dispatch<UnknownAction> = useDispatch();
    const [enabled, setEnabled] = useState(true);

    const {data, error, isError, isSuccess} = useQuery<MatchesResponse, Error>({
        queryKey: ['upcomingEvents'],
        queryFn: fetchUpcomingEvents,
        enabled
    })

    useEffect(() => {
        if(isSuccess && data) {
            dispatch(fetchUpcomingEventsSuccess(data));
            setEnabled(false);
        } else if (isError && error) {
            dispatch(fetchUpcomingEventsFailure(error.message));
        }
    }, [isSuccess, data, error, isError]);
};