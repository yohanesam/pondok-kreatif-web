import axios from 'axios'
import * as types from '../constants/ActionTypes';
import { 
    BASE_URL, 
    LOGIN_URI } from '../config/Apis'

function requestLoginPending() {
    return {
        type: types.REQUEST_LOGIN_PENDING
    }
}

function requestLoginSuccess(success) {
    return {
        type: types.REQUEST_LOGIN_SUCCESS,
        success: success
    }
}

function requestLoginError(error) {
    return {
        type: types.REQUEST_LOGIN_ERROR,
        error: error
    }
}

function requestLogin(user, pass) {
    return dispatch => {
        // dispatch(requestLoginPending());
        return axios.post(`${BASE_URL}${LOGIN_URI}`, {
            user,
            pass
        }).then(res => {
            dispatch(requestLoginSuccess(res));
        }).catch(err => {
            dispatch(requestLoginError(err));
        });
    }
}

export {
    requestLoginSuccess,
    requestLoginError,
    requestLogin
}