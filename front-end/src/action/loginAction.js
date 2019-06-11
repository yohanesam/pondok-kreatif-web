import * as types from '../constants/ActionTypes';

export default loginAction = (email, password) => async dispatch => {
    
    dispatch({
        type: types.REQUEST_LOGIN,
        payload: false
    })
};