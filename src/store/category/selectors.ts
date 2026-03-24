import {StoreSlice} from '../const';
import {State} from '../../types/state';
import {RequestStatus} from '../../services/api/const';
import {createSelector} from '@reduxjs/toolkit';
import {getProducts} from '../products/selectors';
import {TProductType} from './type';

const storeSlice = StoreSlice.Categories;

export const getCategories = (state: State) => state[storeSlice].categories;

export const getIsCategoriesFailed = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Error;

export const getActiveCategory = (state: State) =>
  state[storeSlice].activeCategory;

export const getActiveTypes = (state: State)=>
  state[storeSlice].activeTypes;

export const getFilteredProducts = createSelector(
  [getProducts, getActiveCategory, getActiveTypes],
  (products, activeCategory, activeTypes) => {
    const filteredProducts = activeCategory !== null ?
      products.filter((product) => product.category === activeCategory) : products;

    if (activeTypes.length === 0) {
      return filteredProducts;
    } else {
      return filteredProducts.filter((product) => activeTypes.includes(product.type as TProductType));
    }
  }
);
