import {StoreSlice} from '../const';
import {State} from '../../types/state';
import {RequestStatus} from '../../services/api/const';
import {createSelector} from '@reduxjs/toolkit';
import {getProducts} from '../products/selectors';
import {FilterProductsByCategory} from '../../utils/utils';
import {ProductCategory} from '../../const';

const storeSlice = StoreSlice.Categories;

export const getCategories = (state: State) => state[storeSlice].categories;

export const getIsCategoriesLoading = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Pending;

export const getIsCategoriesFailed = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Error;

export const getActiveCategory = (state: State) => state[storeSlice].activeCategory;

export const getActiveCategoryTypes = (state: State)=> state[storeSlice].activeCategoryTypes;

export const getFilteredProducts = createSelector(
  [getProducts, getActiveCategory],
  (products, activeCategory) =>
    FilterProductsByCategory[activeCategory ?? ProductCategory.All](products)
);
