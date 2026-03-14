import {State} from '../../types/state';
import {StoreSlice} from '../const';

const storeSlice = StoreSlice.SiteProcess;

export const getProductsCount = (state: State) => state[storeSlice].productsCount;

export const getReviewsCount = (state: State) => state[storeSlice].reviewsCount;

export const getShopType = (state: State) => state[storeSlice].shopType;

export const getFilterRating = (state: State) => state[storeSlice].filterRating;
