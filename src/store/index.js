import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from '../reducers';

const middleware = applyMiddleware(reduxThunk, logger);
const store = createStore(rootReducer, middleware)

export default store;
