import { combineReducers } from 'redux';

import count from './count';

/**
 * http://redux.js.org/docs/api/combineReducers.html
 */
const rootReducer = combineReducers({
  count
});

export default rootReducer;
