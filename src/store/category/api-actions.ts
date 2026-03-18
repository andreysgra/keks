import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';
import {TCategories} from '../../types/category';

export const fetchCategories = createAsyncThunk<TCategories, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Categories}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TCategories>(ApiRoute.Categories);

    return data;
  }
);
