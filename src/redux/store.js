import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {userReducer} from "./state/UserState";
import {teamsReducer} from "./state/TeamState";
import {eventReducer} from "./state/EventState";
import {callReducer} from "./state/CallState";
import {messagesReducer} from "./state/MssageState"; // defaults to localStorage for web



const rootReducer = combineReducers({
    user: userReducer,
    teams: teamsReducer,
    messages: messagesReducer,
    events: eventReducer,
    calls: callReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user', 'teams', 'messages', 'calls'] // Persist user, teams, messages, and calls states
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer);
export const persistor = persistStore(store);
