// teamsState.js

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

// Action types
const SET_TEAMS = 'SET_TEAMS';
const ADD_TEAM = 'ADD_TEAM';
const UPDATE_TEAM = 'UPDATE_TEAM';
const DELETE_TEAM = 'DELETE_TEAM';

// Action creators
export const setTeams = (teams) => ({
    type: SET_TEAMS,
    payload: teams,
});

export const addTeam = (team) => ({
    type: ADD_TEAM,
    payload: team,
});

export const updateTeam = (team) => ({
    type: UPDATE_TEAM,
    payload: team,
});

export const deleteTeam = (teamId) => ({
    type: DELETE_TEAM,
    payload: teamId,
});

// Initial state
const initialState = {
    teams: []
};

const persistConfig = {
    key: 'teams',
    storage,
};

// Reducer
export const teamsReducer = persistReducer(persistConfig, (state = initialState, action) => {
    switch (action.type) {
        case SET_TEAMS:
            return {
                ...state,
                teams: action.payload,
            };
        case ADD_TEAM:
            return {
                ...state,
                teams: [...state.teams, action.payload],
            };
        case UPDATE_TEAM:
            return {
                ...state,
                teams: state.teams.map((team) =>
                    team.teamId === action.payload.teamId ? action.payload : team
                ),
            };
        case DELETE_TEAM:
            return {
                ...state,
                teams: state.teams.filter((team) => team.teamId !== action.payload),
            };
        default:
            return state;
    }
});
