import {StoreSlice} from '../const';
import {State} from '../../types/state';
import {RequestStatus} from '../../services/api/const';

const storeSlice = StoreSlice.Favorites;

export const getFavorites = (state: State)=> state[storeSlice].favoriteProducts;

export const getIsFavoritesLoading = (state: State)=>
  state[storeSlice].loadingStatus === RequestStatus.Pending;

export const getIsFavoritesFailed = (state: State)=>
  state[storeSlice].loadingStatus === RequestStatus.Error;
