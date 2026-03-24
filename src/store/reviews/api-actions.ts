import {createAsyncThunk} from '@reduxjs/toolkit';
import {TReview, TReviewContent, TReviews} from '../../types/review';
import {StoreSlice} from '../const';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../../services/api/api-route';
import {AppDispatch} from '../../types/state';

export const fetchReviewLast = createAsyncThunk<TReview, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Reviews}/fetch-last`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TReview>(ApiRoute.ReviewLast);

    return data;
  }
);

export const fetchReviews = createAsyncThunk<TReviews, TReview['id'], {extra: AxiosInstance}>(
  `${StoreSlice.Reviews}/fetch`,
  async (id, {extra: api}) => {
    const {data} = await api.get<TReviews>(`${ApiRoute.Reviews}/${id}`);

    return data;
  }
);

export const postReview = createAsyncThunk<TReview, TReviewContent, {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  `${StoreSlice.Reviews}/post`,
  async ({id, positive, negative, rating}, {extra: api}) => {
    const {data} = await api.post<TReview>(`${ApiRoute.Reviews}/${id}`, {positive, negative, rating});

    return data;
  }
);
