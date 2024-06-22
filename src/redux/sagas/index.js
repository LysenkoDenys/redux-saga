import {
  takeEvery,
  put,
  call,
  fork,
  all,
  race,
  spawn,
} from 'redux-saga/effects';
import {
  GET_NEWS,
  SET_LATEST_NEWS_ERROR,
  SET_POPULAR_NEWS_ERROR,
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

export function* handleNews() {
  yield fork(handleLatestNews);
  yield fork(handlePopularNews);
  // yield race([call(handleLatestNews), yield call(handlePopularNews)]);
}

export function* watchClickSaga() {
  yield takeEvery(GET_NEWS, handleNews); //
}

export default function* rootSaga() {
  yield watchClickSaga();
}
