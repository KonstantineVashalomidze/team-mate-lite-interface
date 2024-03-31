
const SET_USER = 'SET_USER'

export function setUser(data){
    return {
        type: SET_USER,
        payload: {
            userId: data.userId,
            email: data.email,
            displayName: data.displayName,
            photoURL: data.photoURL,
            isInTeams: data.isInTeams
        }
    }
}

const initialState = {
        userId: '',
        email: '',
        displayName: '',
        photoURL: '',
        isInTeams: []
    }


export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                userId: action.payload.userId,
                email: action.payload.email,
                displayName: action.payload.displayName,
                photoURL: action.payload.photoURL,
                isInTeams: action.payload.isInTeams
            }
        default: return state;
    }
}







