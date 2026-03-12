import {createAsyncThunk} from '@reduxjs/toolkit';
import {TReview, TReviews} from '../../types/review';
import {StoreSlice} from '../const';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../../services/api/api-route';

export const fetchReviewLast = createAsyncThunk<TReview, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Reviews}/fetch-last`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TReview>(`${ApiRoute.Reviews}/getLast`);

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
