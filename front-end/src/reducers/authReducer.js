import { 
    REQUEST_LOGIN, 
    REQUEST_REGISTER 
} from '../constants/ActionTypes';

export default (state = {}, action) => {
    switch (action.type) {

    case REQUEST_LOGIN:
        console.log("login is", action.payload);
        return { ...state, loggedIn: action.payload }

    case REQUEST_REGISTER:
        console.log("login is", action.payload);
        return { ...state, loggedIn: action.payload }

    default:
        return state
    }
};
