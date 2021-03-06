import { all } from 'redux-saga/effects';

import thread from './thread';
import threads from './threads';
import topics from './topics';

export default function* rootSaga() {
  yield all([threads(), thread(), topics()]);
}
