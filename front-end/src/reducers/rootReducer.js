import { combineReducers } from 'redux';

// the auth reducer
import loginReducer from './loginReducer';
import registerReducer from './registerReducer';

export default combineReducers({
    authLoginState: loginReducer,
    authRegisterState: registerReducer
});