import {StoreSlice} from './const';
import productsSlice from './products/slice';
import {combineReducers} from '@reduxjs/toolkit';
import siteProcessSlice from './site-process/slice';
import reviewsSlice from './reviews/slice';

export const reducer = combineReducers({
  [StoreSlice.Products]: productsSlice.reducer,
  [StoreSlice.Reviews]: reviewsSlice.reducer,
  [StoreSlice.SiteProcess]: siteProcessSlice.reducer
});
