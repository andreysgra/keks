import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {StoreSlice} from '../const';
import {TProducts} from '../../types/product';
import {ApiRoute} from '../../services/api/api-route';

export const fetchFavorites = createAsyncThunk<TProducts, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Favorites}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TProducts>(ApiRoute.Favorites);

    return data;
  }
);
