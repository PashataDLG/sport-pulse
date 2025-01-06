import { fetchPlTeams} from "../api/plTeamsApi.ts";
import {Dispatch, useEffect, useState} from "react";
import {useDispatch} from 'react-redux';
import {fetchPlTeamsSuccess, TeamsResponse, fetchPlTeamFailure} from "../store/slices/plTeamsSlice";
import {useQuery} from "@tanstack/react-query";
import {UnknownAction} from "@reduxjs/toolkit";

export const usePlTeamsData = () => {
    const dispatch: Dispatch<UnknownAction> = useDispatch();
    const [enabled, setEnabled] = useState<boolean>(true);

    const {data, error, isError, isSuccess} = useQuery<TeamsResponse, Error>({
        queryKey: ['plTeams'],
        queryFn: fetchPlTeams,
        enabled,
    });

    useEffect(() => {
        if(isSuccess && data) {
            dispatch(fetchPlTeamsSuccess(data));
            setEnabled(false);
        } else if(isError && error) {
            dispatch(fetchPlTeamFailure(error.message));
        }
    }, [data, error, isError, isSuccess]);

    return { data };
};