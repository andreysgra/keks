import {createAsyncThunk} from '@reduxjs/toolkit';
import {TProducts} from '../../types/product';
import {AxiosInstance} from 'axios';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';

export const fetchProducts = createAsyncThunk<TProducts, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Products}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TProducts>(ApiRoute.Products);

    return data;
  }
);
