import { takeEvery, put, call, fork, all } from 'redux-saga/effects';
import {
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR,
  GET_LATEST_NEWS,
  GET_POPULAR_NEWS,
} from '../constants';
import { getLatestNews, getPopularNews } from '../../api';
import { setLatestNews, setPopularNews } from '../actions/actionCreator';

export function* handleLatestNews() {
  try {
    // throw new Error();
    const { hits } = yield call(getLatestNews, 'react');
    yield put(setLatestNews(hits));
  } catch (error) {
    // throw new Error('Error fetching latest news');
    yield put({
      type: SET_LATEST_NEWS_ERROR,
      payload: 'shit happens in LATEST NEWS!',
    });
  }
}

export function* handlePopularNews() {
  try {
    const { hits } = yield call(getPopularNews);
    yield put(setPopularNews(hits));
  } catch (error) {
    yield put({
      type: SET_POPULAR_NEWS_ERROR,
      payload: 'shit happens in POPULAR NEWS!',
    });
  }
}

export function* watchPopularSaga() {
  yield takeEvery(GET_POPULAR_NEWS, handlePopularNews);
}
export function* watchLatestSaga() {
  yield takeEvery(GET_LATEST_NEWS, handleLatestNews);
}

export default function* rootSaga() {
  yield all([fork(watchPopularSaga), fork(watchLatestSaga)]);
}
