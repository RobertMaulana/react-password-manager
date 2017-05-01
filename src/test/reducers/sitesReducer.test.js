import { DATA_SITE } from '../../actions/constants';

import sitesReducer from '../../reducers/sitesReducer';

describe('Password Reducer', () => {
  it('should display empty array as an initial state', () => {
    const action = { type: 'unknown' };
    const newState = sitesReducer(undefined, action)
    expect(newState).toEqual([]);
  });
});

describe('on loaded data', () => {
  it('should return all the passwords data from database', () => {
    const action = {
      type: DATA_SITE,
      payload: { payloadKey: 'payloadVal' }
    };
    const newState = sitesReducer(undefined, action);
    expect(newState).toEqual(action.payload);
  });
});
