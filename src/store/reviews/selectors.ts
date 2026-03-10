import {State} from '../../types/state';
import {StoreSlice} from '../const';

export const getReviewsLast = (state: State) => state[StoreSlice.Reviews].reviewLast;

export const getLoadingStatus = (state: State) => state[StoreSlice.Reviews].loadingStatus;
