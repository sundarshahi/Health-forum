import { GET_TOPICS_LOADED } from '../actions/topics';

const topicsReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_TOPICS_LOADED:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default topicsReducer;
