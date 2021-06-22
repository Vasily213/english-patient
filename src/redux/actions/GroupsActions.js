import {SET_ALL_GROUPS, SET_CURRENT_GROUP, SET_STUDENTS_GROUP} from "../ActionTypes.js";

import {groupsAPI} from "../../api";
import {setError} from "./UserActions";

export const setAllGroups = (groups) => ({type: SET_ALL_GROUPS, groups});
export const setCurrentGroup = (currentGroup) => ({type: SET_CURRENT_GROUP, currentGroup});
export const setStudentsGroup = (students) => ({type: SET_STUDENTS_GROUP, students});

export const getAllGroups = () => async (dispatch) => {
    try {
        dispatch(setCurrentGroup(undefined));
        dispatch(setAllGroups({data: [], loading: true}));
        const response = await groupsAPI.getGroups();
        dispatch(setAllGroups({data: response.data, loading: false}));
    } catch (e) {
        dispatch(setError(e))
        dispatch(setAllGroups({data: [], loading: false}));
    }

};


export const getStudentsGroup = (classesId) => async (dispatch) => {
    try {
        dispatch(setStudentsGroup({data: [], loading: true}));
        dispatch(setCurrentGroup(classesId));
        const response = await groupsAPI.getStudents(classesId);
        dispatch(setStudentsGroup({data: response.data, loading: false}));

    } catch (e) {
        dispatch(setError(e))
        dispatch(setStudentsGroup({data: [], loading: false}));
    }

};


