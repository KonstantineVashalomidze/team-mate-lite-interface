// eventActions.js
const SET_EVENTS = 'SET_EVENTS';
const ADD_EVENT = 'ADD_EVENT';
const UPDATE_EVENT = 'UPDATE_EVENT';
const DELETE_EVENT = 'DELETE_EVENT';

export function setEvents(events) {
    return {
        type: SET_EVENTS,
        payload: events,
    };
}

export function addEvent(event) {
    return {
        type: ADD_EVENT,
        payload: event,
    };
}

export function updateEvent(event) {
    return {
        type: UPDATE_EVENT,
        payload: event,
    };
}

export function deleteEvent(eventId) {
    return {
        type: DELETE_EVENT,
        payload: eventId,
    };
}


const initialState = {
    events: [],
};


export function eventReducer(state = initialState, action) {
    switch (action.type) {
        case SET_EVENTS:
            return {
                ...state,
                events: action.payload,
            };
        case ADD_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload],
            };
        case UPDATE_EVENT:
            return {
                ...state,
                events: state.events.map(event =>
                    event.eventId === action.payload.eventId ? action.payload : event
                ),
            };
        case DELETE_EVENT:
            return {
                ...state,
                events: state.events.filter(event => event.eventId !== action.payload),
            };
        default:
            return state;
    }
}
