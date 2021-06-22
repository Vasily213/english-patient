import * as axios from "axios";

axios.defaults.baseURL = 'https://api.englishpatient.org';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export const userAPI = {

    login(email, password) {
        return axios.post('/login', {email, password});
    },

    getUser() {
        return axios.get('/users/me');
    },

    resetPassword(email) {
        return axios.post('/recover-pwd', {email}, {
            baseURL: 'https://os.mipt.ru/ep-en-api'
        });
    },

    confirmPassword(email, password, code) {
        return axios.post('/recover-pwd/set-new-pwd', {email, password, code});
    },

}

export const groupsAPI = {

    getGroups() {
        return axios.get('/classes');
    },

    getStudents(classesId) {
        return axios.get(`/classes/${classesId}/students`);
    },


}
