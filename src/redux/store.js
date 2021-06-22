import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import userReducer from "./reducers/UserReducer";
import groupReducer from "./reducers/GroupReducer";

let reducers = combineReducers({
    userReducer,
    groupReducer,
});



let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
