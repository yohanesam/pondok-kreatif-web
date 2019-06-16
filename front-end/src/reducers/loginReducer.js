import { 
    REQUEST_LOGIN, REQUEST_LOGIN_SUCCESS, REQUEST_LOGIN_ERROR
} from '../constants/ActionTypes';

export default (state = {}, action) => {
    switch (action.type) {

    case REQUEST_LOGIN_SUCCESS:
        console.log("login is", action.success);
        return { ...state, success: true, error: null }

    case REQUEST_LOGIN_ERROR:
        console.log("login is", action.payload);
        return { ...state, success: null, error: true }

    default:
        return state
    }
};
