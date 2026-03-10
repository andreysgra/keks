import {createAsyncThunk} from '@reduxjs/toolkit';
import {TReview} from '../../types/review';
import {StoreSlice} from '../const';
import {AxiosInstance} from 'axios';
import {ApiRoute} from '../../services/api/api-route';

export const fetchReviewLast = createAsyncThunk<TReview, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Reviews}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TReview>(`${ApiRoute.Reviews}/getLast`);

    return data;
  }
);
