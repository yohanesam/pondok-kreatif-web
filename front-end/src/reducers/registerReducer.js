import { 
    REQUEST_REGISTER, REQUEST_REGISTER_SUCCESS, REQUEST_REGISTER_ERROR
} from '../constants/ActionTypes';

export default (state = {}, action) => {
    switch (action.type) {

    case REQUEST_REGISTER_SUCCESS:
        console.log("login is", action.success);
        return { ...state, success: true, error: null }

    case REQUEST_REGISTER_ERROR:
        console.log("login is", action.payload);
        return { ...state, success: null, error: true }

    default:
        return state
    }
};
