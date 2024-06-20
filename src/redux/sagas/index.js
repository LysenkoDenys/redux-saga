import { takeEvery } from 'redux-saga/effects';
import { GET_LATEST_NEWS } from '../constants';
import { getLatestNews } from '../../api';

export function* workerSaga() {
  const data = yield getLatestNews();
  console.log(data); //
}

export function* watchClickSaga() {
  yield takeEvery(GET_LATEST_NEWS, workerSaga); //
  // yield takeLatest(INCREASE_COUNT, workerSaga); //
  // yield takeLeading(INCREASE_COUNT, workerSaga); //
  //   yield take(DECREASE_COUNT);
  //   console.log('i see you request #2'); //
}

export default function* rootSaga() {
  yield watchClickSaga();
}
