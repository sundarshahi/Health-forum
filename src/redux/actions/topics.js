import dataItem from '../../data/topicData';

export const GET_TOPICS = 'GET_TOPICS'
export const GET_TOPICS_LOADED = 'GET_TOPICS_LOADED'
export const GET_TOPICS_LOADING = 'GET_TOPICS_LOADING'


const getTopics = () => async (dispatch, getState) => {

  dispatch({
    type: GET_TOPICS_LOADING
  })
  const response = await dataItem()
  
  dispatch({
    type: GET_TOPICS,
    payload: response
  });
  dispatch({
    type: GET_TOPICS_LOADED
  })
};

export default getTopics