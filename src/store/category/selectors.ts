import {StoreSlice} from '../const';
import {State} from '../../types/state';
import {RequestStatus} from '../../services/api/const';
import {createSelector} from '@reduxjs/toolkit';
import {getProducts} from '../products/selectors';
import {FilterProductsByCategory, FilterProductsByType} from '../../utils/utils';
import {ProductCategory} from '../../const';

const storeSlice = StoreSlice.Categories;

export const getCategories = (state: State) => state[storeSlice].categories;

export const getIsCategoriesLoading = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Pending;

export const getIsCategoriesFailed = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Error;

export const getActiveCategory = (state: State) => state[storeSlice].activeCategory;

export const getActiveTypes = (state: State)=> state[storeSlice].activeTypes;

export const getFilteredProducts = createSelector(
  [getProducts, getActiveCategory, getActiveTypes],
  (products, activeCategory, activeTypes) => {
    const productsByCategory = FilterProductsByCategory[activeCategory ?? ProductCategory.All](products);

    if (activeTypes.length === 0) {
      return productsByCategory;
    } else {
      return activeTypes.map((productType) =>
        FilterProductsByType[productType](productsByCategory)).flat();
    }
  }
);
