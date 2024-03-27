
const ADD_DISPLAY_NAME = 'ADD_DISPLAY_NAME'

export function setDisplayName(displayName){
    return {
        type: ADD_DISPLAY_NAME,
        info: displayName
    }
}


const ADD_EMAIL = 'ADD_EMAIL'

export function setEmail(email) {
    return {
        type: ADD_EMAIL,
        info: email
    }
}

const initialState = {
        displayName: '',
        email: '',
    }


export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISPLAY_NAME:
            return {
                ...state,
                displayName: action.info
            }
        case ADD_EMAIL:
            return {
                ...state,
                email: action.info
            }

        default: return state;
    }
}







