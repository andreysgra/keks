import {State} from '../../types/state';
import {StoreSlice} from '../const';

export const getProductsCount = (state: State) => state[StoreSlice.SiteProcess].productsCount;

export const getShopType = (state: State) => state[StoreSlice.SiteProcess].shopType;
