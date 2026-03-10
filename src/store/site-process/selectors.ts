import {State} from '../../types/state';
import {StoreSlice} from '../const';

export const getProductsCount = (state: State) => state[StoreSlice.SiteProcess].productsCount;
