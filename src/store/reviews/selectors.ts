import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {RequestStatus} from '../../services/api/const';

const storeSlice = StoreSlice.Reviews;

export const getReviewsLast = (state: State) => state[storeSlice].reviewLast;

export const getIsReviewLastLoading = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Pending;

export const getIsReviewLastFailed = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Error;

export const getReviews = (state: State) => state[storeSlice].reviews;

export const getHasReviews = (state: State) => state[storeSlice].reviews.length > 0;

export const getIsReviewsLoading = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Pending;

export const getIsReviewsFailed = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Error;

export const getIsReviewSubmitting = (state: State)=>
  state[storeSlice].submitStatus === RequestStatus.Pending;

export const getIsReviewSubmitFailed = (state: State)=>
  state[storeSlice].submitStatus === RequestStatus.Error;

export const getIsReviewSubmitSuccess = (state: State) =>
  state[storeSlice].submitStatus === RequestStatus.Success;
