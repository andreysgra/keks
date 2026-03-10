import {State} from '../../types/state';
import {StoreSlice} from '../const';

export const getProducts = (state: State) => state[StoreSlice.Products].products;

export const getIsProductsLoading =
  (state: State) => state[StoreSlice.Products].isProductsLoading;
