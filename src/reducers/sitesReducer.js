import { ADD_SITE, DATA_SITE, EDIT_SITE, REMOVE_SITE } from '../actions/constants';

let initialState = [];

const sitesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SITE:
      return action.payload
    case DATA_SITE:
      return action.payload
    case EDIT_SITE:
      return action.payload
    case REMOVE_SITE:
      return action.payload
    default:
      return state
  }
}

export default sitesReducer
