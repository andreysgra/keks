import {createAsyncThunk} from '@reduxjs/toolkit';
import {TDetailedProduct} from '../../types/product';
import {AxiosError, AxiosInstance, HttpStatusCode} from 'axios';
import {AppDispatch} from '../../types/state';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';
import {AppRoute} from '../../const';
import {redirectToRoute} from '../action';

export const fetchProduct = createAsyncThunk<TDetailedProduct, TDetailedProduct['id'], {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  `${StoreSlice.Product}/fetch`,
  async (id, {extra: api, dispatch}) => {
    try {
      const {data} = await api.get<TDetailedProduct>(`${ApiRoute.Products}/${id}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpStatusCode.NotFound) {
        dispatch(redirectToRoute(AppRoute.NotFound));
      }

      return Promise.reject(error);
    }
  }
);
