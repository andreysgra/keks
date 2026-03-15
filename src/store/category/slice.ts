import {RequestStatus} from '../../services/api/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchCategories} from './api-actions';
import {TCategoriesState} from './type';
import {TCategories} from '../../types/category';

const initialState: TCategoriesState = {
  categories: [],
  loadingStatus: RequestStatus.Idle
};

const categoriesSlice = createSlice({
  name: StoreSlice.Products,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<TCategories>) => {
        state.categories = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.categories = [];
        state.loadingStatus = RequestStatus.Error;
      });
  }
});

export default categoriesSlice;
