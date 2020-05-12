import { call, put, takeLatest } from 'redux-saga/effects';

import { GET_TOPICS, receiveTopics } from '../actions/topics';
import { fetchTopics } from '../api';

function* getTopics() {
  try {
    // do api call
    const data = yield call(fetchTopics);

    yield put(receiveTopics(data));
  } catch (e) {
    console.log(e);
  }
}
export default function* rootSaga() {
  yield takeLatest(GET_TOPICS, getTopics);
}
