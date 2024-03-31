import {userReducer} from "./state/UserState";
import {createStore} from "redux";
import {teamsReducer} from "./state/TeamState";
import {messagesReducer} from "./state/MssageState";
import {eventReducer} from "./state/EventState";
import {callReducer} from "./state/CallState";


export const userStore = createStore(userReducer)
export const teamStore = createStore(teamsReducer)
export const messageStore = createStore(messagesReducer)
export const eventStore = createStore(eventReducer)
export const callStore = createStore(callReducer)



