import {StoreSlice} from '../const';
import {State} from '../../types/state';

const storeSlice = StoreSlice.User;

export const getRegistrationStatus =
  (state: State) => state[storeSlice].registrationStatus;
