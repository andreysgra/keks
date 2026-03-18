import {StoreSlice} from '../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../services/api/const';

const storeSlice = StoreSlice.User;

export const getRegistrationStatus =
  (state: State) => state[storeSlice].registrationStatus;

export const getAuthorizationStatus = (state: State) =>
  state[StoreSlice.User].authorizationStatus;

export const getIsAuthorized = (state: State): boolean =>
  state[StoreSlice.User].authorizationStatus === AuthorizationStatus.Auth;

export const getUser = (state: State) => state[StoreSlice.User].user;
