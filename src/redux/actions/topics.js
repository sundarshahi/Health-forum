import dataItem from '../../components/data/topicData';

export const GET_TOPICS = 'GET_TOPICS'


const getTopics = () => async (dispatch, getState) => {
  const response = await dataItem()
  dispatch({
    type: GET_TOPICS,
    payload: response
  });
};

export default getTopics