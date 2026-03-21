import {TFavoritesState} from './type';
import {RequestStatus} from '../../services/api/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchFavorites} from './api-actions';
import {TProducts} from '../../types/product';

const initialState: TFavoritesState = {
  favoriteProducts: [],
  loadingStatus: RequestStatus.Idle
};

const favoritesSlice = createSlice({
  name: StoreSlice.Favorites,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorites.fulfilled, (state, action: PayloadAction<TProducts>) => {
        state.favoriteProducts = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchFavorites.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.favoriteProducts = [];
        state.loadingStatus = RequestStatus.Error;
      });
  }
});

export default favoritesSlice;
