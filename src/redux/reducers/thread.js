import { GET_REPLIES_LOADED } from '../actions/replies';
import { RECEIVE_THREAD } from '../actions/threads';

const threadReducer = (
  state = { loading: true, loadingReplies: true, replies: { data: [] } },
  action,
) => {
  switch (action.type) {
    case RECEIVE_THREAD:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case GET_REPLIES_LOADED:
      return {
        ...state,
        replies: action.payload,
        loadingReplies: false,
      };
    default:
      return state;
  }
};
export default threadReducer;
