import {SET_ALL_GROUPS, SET_CURRENT_GROUP, SET_STUDENTS_GROUP} from "../ActionTypes";

const initialState = {
    allGroups: {
        data: [],
        loading: false
    },
    currentGroup: undefined,
    students: {
        data: [],
        loading: false
    },
    loadingGroup: false,


}

const groupReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_ALL_GROUPS:
            return {...state, allGroups: action.groups};
        case SET_CURRENT_GROUP:
            return {...state, currentGroup: action.currentGroup};
        case SET_STUDENTS_GROUP:
            return {...state, students: action.students};
        default:
            return state;
    }
};


export default groupReducer;
