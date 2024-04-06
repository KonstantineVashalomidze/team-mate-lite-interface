
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

const SET_USER = 'SET_USER';

export function setUser(data) {
    return {
        type: SET_USER,
        payload: {
            userId: data.userId,
            email: data.email,
            displayName: data.displayName,
            photoURL: data.photoURL,
            isInTeams: data.isInTeams
        }
    };
}

const initialState = {
    userId: '',
    email: '',
    displayName: '',
    photoURL: '',
    isInTeams: []
};

const persistConfig = {
    key: 'user',
    storage,
};

export const userReducer = persistReducer(persistConfig, (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                userId: action.payload.userId,
                email: action.payload.email,
                displayName: action.payload.displayName,
                photoURL: action.payload.photoURL,
                isInTeams: action.payload.isInTeams
            };
        default:
            return state;
    }
});
