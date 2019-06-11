import { combineReducers } from 'redux';

// the auth reducer
import authReducer from './authReducer';

export default combineReducers({
    authState: authReducer,
});