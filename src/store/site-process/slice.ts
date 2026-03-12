import {TSiteProcessState} from './type';
import {REVIEWS_PER_LOAD, PRODUCTS_PER_LOAD, Shops} from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TShopType} from '../../types/shop';

const initialState: TSiteProcessState = {
  productsCount: PRODUCTS_PER_LOAD,
  reviewsCount: REVIEWS_PER_LOAD,
  shopType: Object.keys(Shops)[0]
};

const siteProcessSlice = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setProductsCount: (state, action: PayloadAction<number>) => {
      state.productsCount = action.payload;
    },
    setReviewsCount: (state, action: PayloadAction<number>) => {
      state.reviewsCount = action.payload;
    },
    setShopType: (state, action: PayloadAction<TShopType>) => {
      state.shopType = action.payload;
    }
  }
});

export const {setProductsCount, setReviewsCount, setShopType} = siteProcessSlice.actions;

export default siteProcessSlice;
