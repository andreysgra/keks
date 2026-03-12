import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {RequestStatus} from '../../services/api/const';

const storeSlice = StoreSlice.Product;

export const getProduct = (state: State) => state[storeSlice].product;

export const getIsProductLoading = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Pending;

export const getIsProductFailed = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Error;
