import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import usersReducer from './usersReducer';
import sitesReducer from './sitesReducer';

const rootReducer = combineReducers({
  form,
  users: usersReducer,
  sites: sitesReducer
})

export default rootReducer
