import {TProductsState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TProducts} from '../../types/product';
import {fetchProducts} from './api-actions';
import {RequestStatus} from '../../services/api/const';

const initialState: TProductsState = {
  products: [],
  loadingStatus: RequestStatus.Idle
};

const productsSlice = createSlice({
  name: StoreSlice.Products,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<TProducts>) => {
        state.products = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.products = [];
        state.loadingStatus = RequestStatus.Error;
      });
  }
});

export default productsSlice;
