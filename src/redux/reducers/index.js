import { combineReducers } from 'redux';

import topicsReducer from './topics';
import threadsReducer from './threads';

const reducer = combineReducers({
  topics: topicsReducer,
  threads: threadsReducer
})

export default reducer