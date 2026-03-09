import {StoreSlice} from './const';
import productsSlice from './products/slice';
import {combineReducers} from '@reduxjs/toolkit';

export const reducer = combineReducers({
  [StoreSlice.Products]: productsSlice.reducer
});
