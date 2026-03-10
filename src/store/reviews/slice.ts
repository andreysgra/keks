import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TReviewsState} from './type';
import {fetchReviewLast} from './api-actions';
import {TReview} from '../../types/review';
import {RequestStatus} from '../../services/api/const';

const initialState: TReviewsState = {
  reviewLast: null,
  loadingStatus: RequestStatus.Idle
};

const reviewsSlice = createSlice({
  name: StoreSlice.Products,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewLast.fulfilled, (state, action: PayloadAction<TReview>) => {
        state.reviewLast = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchReviewLast.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchReviewLast.rejected, (state) => {
        state.reviewLast = null;
        state.loadingStatus = RequestStatus.Error;
      });
  }
});

export default reviewsSlice;
