import { RECEIVE_THREADS } from '../actions/threads';

const threadsReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case RECEIVE_THREADS:
      return action.payload;
    default:
      return state;
  }
};

export default threadsReducer;
