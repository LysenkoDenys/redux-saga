import { SET_LATEST_NEWS, SET_POPULAR_NEWS, GET_NEWS } from '../constants';

//action creator:
export const getNews = () => ({
  type: GET_NEWS,
});

//action creator:
export const setLatestNews = (payload) => ({
  type: SET_LATEST_NEWS,
  payload: payload,
});
//action creator:
export const setPopularNews = (payload) => ({
  type: SET_POPULAR_NEWS,
  payload: payload,
});
