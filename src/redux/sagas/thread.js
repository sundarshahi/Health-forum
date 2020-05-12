import { call, put, all, takeLatest } from 'redux-saga/effects';

import { REQUEST_THREAD, receiveThread } from '../actions/threads';
import { GET_REPLIES, receiveReplies } from '../actions/replies';
import { fetchThread, fetchReplies } from '../api';

function* getThread({ payload }) {
  try {
    // do api call
    const data = yield call(fetchThread, payload);
    console.log(data);
    yield put(receiveThread(data));
  } catch (e) {
    console.log(e);
  }
}

function* getReplies({ id, page }) {
  try {
    // do api call
    const data = yield call(fetchReplies, id, page);
    console.log(data);
    yield put(receiveReplies(data));
  } catch (e) {
    console.log(e);
  }
}
function* watchAll() {
  yield all([
    takeLatest(GET_REPLIES, getReplies),
    takeLatest(REQUEST_THREAD, getThread),
  ]);
}

export default watchAll;
