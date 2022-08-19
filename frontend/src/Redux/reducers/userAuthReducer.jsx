import * as actions from '../actions/actionTypes'
const initialState = {
    user: {
        id: "",
        name: "",
        username: "",
        email: "",
        role: ""

    },
    isLoggedIn: false,
}

export const userReducer = (state=initialState, action) =>{
    switch(action.type){
        case actions.LOGIN:
            return {
                ...state,
                user: action.payload,
                isLoggedIn: true
                
            }

        case actions.LOGOUT:
            return {
                ...state,
                user: null,
                isLoggedIn: false,
            }
        default:
            return state
    }
}