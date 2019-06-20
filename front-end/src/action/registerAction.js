import * as types from '../constants/ActionTypes';
import axios from 'axios';
import { 
    BASE_URL, 
    UMKM_REGISTER_URI 
} from '../config/Apis';

function requestRegisterPending() {
    return {
        type: types.REQUEST_LOGIN_PENDING
    }
}

function requestRegisterSuccess(success) {
    return {
        type: types.REQUEST_LOGIN_SUCCESS,
        success: success
    }
}

function requestRegisterError(error) {
    return {
        type: types.REQUEST_LOGIN_ERROR,
        error: error
    }
}

function requestRegister(user, pass) {
    return dispatch => {
        // dispatch(requestLoginPending());
        return axios.post(`${BASE_URL}${UMKM_REGISTER_URI}`, {
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
    requestRegisterSuccess,
    requestRegisterError,
    requestRegister
}

