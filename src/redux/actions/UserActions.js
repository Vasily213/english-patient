import {APP_INITIALIZED, SET_USER_DATA, APP_IS_LOADING, SET_USER_ERROR, SET_USER_RESET_EMAIL} from "../ActionTypes.js";
import {userAPI as usersAPI} from "../../api";
import * as axios from "axios";

export const initializeApp = (bool) => ({type: APP_INITIALIZED, bool});
export const setUserData = (user) => ({type: SET_USER_DATA, user});
export const setLoading = (loading) => ({type: APP_IS_LOADING, loading});
export const setError = (error) => ({type: SET_USER_ERROR, error});
export const setResetEmail = (resetEmail) => ({type: SET_USER_RESET_EMAIL, resetEmail});

export const getUserData = () => async (dispatch) => {
    try {
        dispatch(setError(""));
        dispatch(setLoading(true));
        const response = await usersAPI.getUser();
        if (response.data) {
            dispatch(setLoading(false));
            dispatch(setUserData(response.data));
        } else {
            dispatch(setLoading(false));
            dispatch(setError(response.data.error.message));
        }
    } catch (e) {
        dispatch(setLoading(false));
    }

};

export const resetPassword = (email) => async (dispatch) => {
    try {
        dispatch(setError(""));
        dispatch(setResetEmail(email));
        await usersAPI.resetPassword(email);
    } catch (e) {
        dispatch(setError(e));
    }

}

export const confirmPassword = (email, password, code) => async (dispatch) => {
    try {
        dispatch(setError(""));
        dispatch(setLoading(true));
        const response = await usersAPI.confirmPassword(email, password, code);
        if (response.data.result === false)
        {
            dispatch(setError(response.data.result));
            dispatch(setLoading(false));
        }
        else {
            dispatch(login(email, password));
            dispatch(setLoading(false));
        }

    } catch (e) {
        dispatch(setError(e));
        dispatch(setLoading(false));
    }

}

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch(setError(""));
        dispatch(setLoading(true));
        const response = await usersAPI.login(email, password);
        if (response.data.error) {
            dispatch(setError(response.data.error.message));
            dispatch(setLoading(false));
        } else {
            localStorage.setItem("auth_token", response.data.token);
            dispatch(getUserData());
            dispatch(setLoading(false));
        }
    } catch (e) {
        dispatch(setLoading(false));
    }

}


export const logout = () => {
    return async (dispatch) => {
        localStorage.removeItem('auth_token');
        delete axios.defaults.headers.common["Authorization"];
        dispatch(setUserData(null));
    }
}
