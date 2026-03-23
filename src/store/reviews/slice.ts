import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TReviewsState} from './type';
import {fetchReviewLast, fetchReviews, postReview} from './api-actions';
import {TReview, TReviews} from '../../types/review';
import {RequestStatus} from '../../services/api/const';

const initialState: TReviewsState = {
  reviews: [],
  reviewLast: null,
  loadingStatus: RequestStatus.Idle,
  submitStatus: RequestStatus.Idle
};

const reviewsSlice = createSlice({
  name: StoreSlice.Products,
  initialState,
  reducers: {
    setReviewStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.submitStatus = action.payload;
    }
  },
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
      })
      .addCase(fetchReviews.fulfilled, (state, action: PayloadAction<TReviews>) => {
        state.reviews = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchReviews.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviews = [];
        state.loadingStatus = RequestStatus.Error;
      })
      .addCase(postReview.fulfilled, (state, action: PayloadAction<TReview>) => {
        state.reviews.push(action.payload);
        state.submitStatus = RequestStatus.Success;
      })
      .addCase(postReview.pending, (state) => {
        state.submitStatus = RequestStatus.Pending;
      })
      .addCase(postReview.rejected, (state) => {
        state.submitStatus = RequestStatus.Error;
      });
  }
});

export const {setReviewStatus} = reviewsSlice.actions;

export default reviewsSlice;
