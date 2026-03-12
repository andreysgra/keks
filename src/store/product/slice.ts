import {TProductState} from './type';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TDetailedProduct} from '../../types/product';
import {fetchProduct} from './api-actions';
import {RequestStatus} from '../../services/api/const';

const initialState: TProductState = {
  product: null,
  loadingStatus: RequestStatus.Idle,
};

const productSlice = createSlice({
  name: StoreSlice.Product,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.fulfilled, (state, action: PayloadAction<TDetailedProduct>) => {
        state.product = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchProduct.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchProduct.rejected, (state) => {
        state.product = null;
        state.loadingStatus = RequestStatus.Error;
      });
  }
});

export default productSlice;
