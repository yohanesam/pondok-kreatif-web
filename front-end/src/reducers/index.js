import { combineReducer } from 'redux';
import {
    REQUEST_LOGIN,
    REQUEST_REGISTER
} from '../action';

const initialState = {
    login: false,
    register: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
            console.log("log in is", action.login);
            return { 
                ...state, 
                loggedIn: action.login,
            }

        case REQUEST_REGISTER:
            return {
                ...state,
                loggedIn: action.register,
            }

        default:
            return state
    }
}

export const getLogin = state => state.login;
export const getRegister = state => state.register;
