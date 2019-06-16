import { combineReducers } from 'redux';

// the auth reducer
import loginReducer from './loginReducer';

export default combineReducers({
    authState: loginReducer,
});