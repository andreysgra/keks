import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {RequestStatus} from '../../services/api/const';

const storeSlice = StoreSlice.Products;

export const getProducts = (state: State) => state[storeSlice].products;

export const getIsProductsLoading = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Pending;

export const getIsProductsFailed = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Error;
