import axios from 'axios'

export const GET_REPLIES = 'GET_REPLIES'
export const GET_REPLIES_LOADED = 'GET_REPLIES_LOADED'

export const getReplies = (id,page=1) => async (dispatch) => {
  const response = await axios.get(`https://v-forum-api.bahdcasts.com/api/threads/${id}/replies?page=${page}`)

  dispatch({
    type: GET_REPLIES,
    payload: response.data.data
  })
  dispatch({
    type: GET_REPLIES_LOADED
  })
}