import {APP_INITIALIZED, APP_IS_LOADING, SET_USER_DATA, SET_USER_ERROR, SET_USER_RESET_EMAIL} from "../ActionTypes";

const initialState = {
    resetEmail: '',
    initialized: false,
    loading: false,
    users: [],
    user: null,
    currentUserId: undefined,
    error: undefined
}

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_RESET_EMAIL:
            return {...state, resetEmail: action.resetEmail};
        case SET_USER_DATA:
            return {...state, user: action.user};
        case APP_IS_LOADING:
            return {...state, loading: action.loading};
        case APP_INITIALIZED:
            return {...state, initialized: action.bool};
        case SET_USER_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
};







export default userReducer;
