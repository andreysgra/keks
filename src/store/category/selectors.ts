import {StoreSlice} from '../const';
import {State} from '../../types/state';
import {RequestStatus} from '../../services/api/const';

const storeSlice = StoreSlice.Categories;

export const getCategories = (state: State) => state[storeSlice].categories;

export const getIsCategoriesLoading = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Pending;

export const getIsCategoriesFailed = (state: State) =>
  state[storeSlice].loadingStatus === RequestStatus.Error;
