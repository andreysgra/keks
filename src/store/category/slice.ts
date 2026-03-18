import {RequestStatus} from '../../services/api/const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {fetchCategories} from './api-actions';
import {TCategoriesState, TProductCategory, TProductType} from './type';
import {TCategories} from '../../types/category';

const initialState: TCategoriesState = {
  categories: [],
  loadingStatus: RequestStatus.Idle,
  activeCategory:  null,
  activeTypes: []
};

const categoriesSlice = createSlice({
  name: StoreSlice.Products,
  initialState,
  reducers: {
    setActiveCategory: (state, action: PayloadAction<TProductCategory>) => {
      state.activeCategory = action.payload;
      state.activeTypes = [];
    },
    setActiveTypes: (state, action: PayloadAction<TProductType>) => {
      if (state.activeTypes.includes(action.payload)) {
        state.activeTypes = state.activeTypes.filter((type) => type !== action.payload);
      } else {
        state.activeTypes.push(action.payload);
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<TCategories>) => {
        state.categories = action.payload;
        state.loadingStatus = RequestStatus.Success;
      })
      .addCase(fetchCategories.pending, (state) => {
        state.loadingStatus = RequestStatus.Pending;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.categories = [];
        state.loadingStatus = RequestStatus.Error;
      });
  }
});

export const {setActiveCategory, setActiveTypes} = categoriesSlice.actions;

export default categoriesSlice;
