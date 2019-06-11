import { 
    createStore,
    applyMiddleware
} from 'redux';

import reduxThunk from 'redux-thunk';

// the root of reducer
import rootReducer from './reducers/rootReducer'

function configureStore (
    state = {
        authState: {},
    }
) {
    return createStore(
        rootReducer,
        state,
        applyMiddleware(reduxThunk),
    )
};

export default configureStore;