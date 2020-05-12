export const GET_TOPICS = 'GET_TOPICS';
export const GET_TOPICS_LOADED = 'GET_TOPICS_LOADED';

export const requestTopics = (id, page) => ({
  type: GET_TOPICS,
  id,
  page,
});

export const receiveTopics = (data) => ({
  type: GET_TOPICS_LOADED,
  payload: data,
});
