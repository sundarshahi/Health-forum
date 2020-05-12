export const GET_REPLIES = 'GET_REPLIES';
export const GET_REPLIES_LOADED = 'GET_REPLIES_LOADED';

export const requestReplies = (id, page) => ({
  type: GET_REPLIES,
  id,
  page,
});

export const receiveReplies = (data) => ({
  type: GET_REPLIES_LOADED,
  payload: data,
});
