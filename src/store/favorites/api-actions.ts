import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosError, AxiosInstance, HttpStatusCode} from 'axios';
import {StoreSlice} from '../const';
import {TProduct, TProducts} from '../../types/product';
import {ApiRoute} from '../../services/api/api-route';
import {AppDispatch} from '../../types/state';
import {redirectToRoute} from '../action';
import {AppRoute} from '../../const';

export const fetchFavorites = createAsyncThunk<TProducts, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.Favorites}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TProducts>(ApiRoute.Favorites);

    return data;
  }
);

export const addFavorite = createAsyncThunk<TProduct, TProduct['id'], {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  `${StoreSlice.Favorites}/add`,
  async (id, {extra: api, dispatch}) => {
    try {
      const {data} = await api.put<TProduct>(`${ApiRoute.Favorites}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpStatusCode.Unauthorized) {
        dispatch(redirectToRoute(AppRoute.SignIn));
      }

      return Promise.reject(error);
    }
  }
);

export const deleteFavorite = createAsyncThunk<TProduct, TProduct['id'], {
  extra: AxiosInstance;
}>(
  `${StoreSlice.Favorites}/delete`,
  async (id, {extra: api}) => {
    const {data} = await api.delete<TProduct>(`${ApiRoute.Favorites}/${id}`);

    return data;
  }
);
