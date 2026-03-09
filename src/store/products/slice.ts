import {TProductsState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TProducts} from '../../types/product';
import {fetchProducts} from './api-actions';

const initialState: TProductsState = {
  products: [],
  isProductsLoading: false
};

const productsSlice = createSlice({
  name: StoreSlice.Products,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<TProducts>) => {
        state.products = action.payload;
        state.isProductsLoading = false;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.isProductsLoading = true;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.isProductsLoading = false;
      });
  }
});

export default productsSlice;
