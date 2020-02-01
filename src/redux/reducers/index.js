import { combineReducers } from 'redux'

import topicsReducer from './topics'

const reducer = combineReducers({
  topics: topicsReducer
})

export default reducer