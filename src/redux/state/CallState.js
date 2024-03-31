const SET_CALLS = 'SET_CALLS';
const ADD_CALL = 'ADD_CALL';
const UPDATE_CALL = 'UPDATE_CALL';
const DELETE_CALL = 'DELETE_CALL';

export function setCalls(calls) {
    return {
        type: SET_CALLS,
        payload: calls,
    };
}

export function addCall(call) {
    return {
        type: ADD_CALL,
        payload: call,
    };
}

export function updateCall(call) {
    return {
        type: UPDATE_CALL,
        payload: call,
    };
}

export function deleteCall(callId) {
    return {
        type: DELETE_CALL,
        payload: callId,
    };
}



const initialState = {
    calls: [],
};

export const callReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CALLS:
            return {
                ...state,
                calls: action.payload,
            };
        case ADD_CALL:
            return {
                ...state,
                calls: [...state.calls, action.payload],
            };
        case UPDATE_CALL:
            return {
                ...state,
                calls: state.calls.map(call =>
                    call.callId === action.payload.callId ? action.payload : call
                ),
            };
        case DELETE_CALL:
            return {
                ...state,
                calls: state.calls.filter(call => call.callId !== action.payload),
            };
        default:
            return state;
    }
};