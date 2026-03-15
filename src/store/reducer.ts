import {StoreSlice} from './const';
import productsSlice from './products/slice';
import {combineReducers} from '@reduxjs/toolkit';
import siteProcessSlice from './site-process/slice';
import reviewsSlice from './reviews/slice';
import productSlice from './product/slice';
import categoriesSlice from './category/slice';

export const reducer = combineReducers({
  [StoreSlice.Categories]: categoriesSlice.reducer,
  [StoreSlice.Product]: productSlice.reducer,
  [StoreSlice.Products]: productsSlice.reducer,
  [StoreSlice.Reviews]: reviewsSlice.reducer,
  [StoreSlice.SiteProcess]: siteProcessSlice.reducer
});
