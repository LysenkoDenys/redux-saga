import { INCREASE_COUNT, DECREASE_COUNT, GET_LATEST_NEWS } from '../constants';

//action creator:
export const increaseCount = () => ({
  type: INCREASE_COUNT,
});

//action creator:
export const decreaseCount = () => ({
  type: DECREASE_COUNT,
});

//action creator:
export const getLatestNews = () => ({
  type: GET_LATEST_NEWS,
});
