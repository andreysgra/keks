import {TFavoritesState} from './type';
import {RequestStatus} from '../../services/api/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {addFavorite, deleteFavorite, fetchFavorites} from './api-actions';
import {TProduct, TProducts} from '../../types/product';

const initialState: TFavoritesState = {
  favoriteProducts: [],
  addingStatus: RequestStatus.Idle,
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
      })
      .addCase(addFavorite.fulfilled, (state, action: PayloadAction<TProduct>) => {
        state.favoriteProducts.push(action.payload);
        state.addingStatus = RequestStatus.Success;
      })
      .addCase(addFavorite.pending, (state) => {
        state.addingStatus = RequestStatus.Pending;
      })
      .addCase(addFavorite.rejected, (state) => {
        state.addingStatus = RequestStatus.Error;
      })
      .addCase(deleteFavorite.fulfilled, (state, action: PayloadAction<TProduct>) => {
        state.favoriteProducts = state.favoriteProducts.filter((favoriteProduct) =>
          favoriteProduct.id !== action.payload.id);
        state.addingStatus = RequestStatus.Success;
      })
      .addCase(deleteFavorite.pending, (state) => {
        state.addingStatus = RequestStatus.Pending;
      })
      .addCase(deleteFavorite.rejected, (state) => {
        state.addingStatus = RequestStatus.Error;
      });
  }
});

export default favoritesSlice;
