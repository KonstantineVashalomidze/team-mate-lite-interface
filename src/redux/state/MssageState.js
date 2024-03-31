
const SET_MESSAGES = 'SET_MESSAGES';
const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
const DELETE_MESSAGE = 'DELETE_MESSAGE';



export const setMessages = (messages) => ({
    type: SET_MESSAGES,
    payload: messages,
});

export const addMessage = (message) => ({
    type: ADD_MESSAGE,
    payload: message,
});

export const updateMessage = (messageId, updatedMessage) => ({
    type: UPDATE_MESSAGE,
    payload: { messageId, updatedMessage },
});

export const deleteMessage = (messageId) => ({
    type: DELETE_MESSAGE,
    payload: messageId,
});



const initialState = {
    messages: [],
};

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.payload,
            };
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.payload],
            };
        case UPDATE_MESSAGE:
            return {
                ...state,
                messages: state.messages.map((message) =>
                    message.messageId === action.payload.messageId ? action.payload.updatedMessage : message
                ),
            };
        case DELETE_MESSAGE:
            return {
                ...state,
                messages: state.messages.filter((message) => message.messageId !== action.payload),
            };
        default:
            return state;
    }
};
