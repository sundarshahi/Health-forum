import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_THREADS, receiveThreads } from '../actions/threads';
import { fetchThreads } from '../api';

function* getThreads({ payload }) {
  try {
    // do api call
    const data = yield call(fetchThreads, payload);
    console.log(data);
    yield put(receiveThreads(data));
  } catch (e) {
    console.log(e);
  }
}
export default function* rootSaga() {
  yield takeLatest(REQUEST_THREADS, getThreads);
}
