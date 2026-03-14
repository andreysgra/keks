import {State} from '../../types/state';
import {StoreSlice} from '../const';
import {createSelector} from '@reduxjs/toolkit';
import {FilterReviewsByRating, SortReviewsByDate} from '../../utils/utils';
import {getReviews} from '../reviews/selectors';

const storeSlice = StoreSlice.SiteProcess;

export const getProductsCount = (state: State) => state[storeSlice].productsCount;

export const getReviewsCount = (state: State) => state[storeSlice].reviewsCount;

export const getShopType = (state: State) => state[storeSlice].shopType;

export const getReviewsFilterOption = (state: State) => state[storeSlice].reviewsFilterOption;

export const getReviewsSortOption = (state: State) => state[storeSlice].reviewsSortOption;

export const getFilteredReviews = createSelector(
  [getReviews, getReviewsSortOption, getReviewsFilterOption],
  (reviews, sortOption, filterOption) =>
    [...FilterReviewsByRating[filterOption](reviews)]
      .sort(SortReviewsByDate[sortOption])
);
