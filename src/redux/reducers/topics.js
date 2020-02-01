import { GET_TOPICS ,GET_TOPICS_LOADING,GET_TOPICS_LOADED} from '../actions/topics'

const topicsReducer = (state = { data: [] }, action) => {
  switch (action.type) {
    case GET_TOPICS:
      return {
        ...state,
        data: action.payload
      }
    case GET_TOPICS_LOADING:
      return {
        ...state,
        loading: true
      }
    case GET_TOPICS_LOADED:
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  }
}

export default topicsReducer