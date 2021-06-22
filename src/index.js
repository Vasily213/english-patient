import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from '@material-ui/core';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import theme from "./ui/themes";
import store from "./redux/store";
import axios from "axios";

const getToken = () => {
    let tk = window.localStorage.getItem('auth_token')
    if (tk === undefined || tk === '') {
        return;
    }
    return tk;
}

axios.interceptors.request.use((config) => {
    let token = getToken();
    if (token !== undefined) {
        config.headers['Authorization'] = token;
    }
    return config;
}, (error) => {
    return Promise.reject(error);

})


ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App/>
            </Provider>
        </ThemeProvider>
    </BrowserRouter>
    ,
    document.getElementById('root')
);

