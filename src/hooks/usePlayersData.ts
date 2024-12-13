import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { fetchPlayersData } from '../api/plPlayersApi';
import { fetchTeamSuccess } from '../store/slices/playersSlice';
import { useEffect } from 'react';

export const usePlayers = (teamId: number) => {
    const dispatch = useDispatch();

    const queryResult = useQuery({ queryKey: ['players', teamId], queryFn: () => fetchPlayersData(teamId) });

    useEffect(() => {
        if (queryResult.isSuccess && queryResult.data) {
            dispatch(fetchTeamSuccess(queryResult.data));
        }
    }, [queryResult, dispatch])
};