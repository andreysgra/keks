import {TSiteProcessState} from './type';
import {PRODUCTS_PER_LOAD} from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';

const initialState: TSiteProcessState = {
  productsCount: PRODUCTS_PER_LOAD
};

const siteProcessSlice = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setProductsCount: (state, action: PayloadAction<number>) => {
      state.productsCount = action.payload;
    }
  }
});

export const {setProductsCount} = siteProcessSlice.actions;

export default siteProcessSlice;
