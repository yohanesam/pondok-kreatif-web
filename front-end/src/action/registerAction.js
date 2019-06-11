import * as types from '../constants/ActionTypes';
import axios from 'axios';
import { 
    BASE_URL, 
    TEKA_REGISTER_URI 
} from '../config/Apis';

export default registerAction = () => async dispatch => {

    return axios.post(`${ BASE_URL }${ TEKA_REGISTER_URI }`)
                .then((data))
    dispatch({
        types: types.REQUEST_REGISTER,
        payload: false
    })
};

