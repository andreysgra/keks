import {StoreSlice} from '../const';
import {State} from '../../types/state';
import {AuthorizationStatus} from '../../services/api/const';

const storeSlice = StoreSlice.User;

export const getRegistrationStatus =
  (state: State) => state[storeSlice].registrationStatus;

export const getAuthorizationStatus = (state: State) =>
  state[storeSlice].authorizationStatus;

export const getIsAuthorized = (state: State): boolean =>
  state[storeSlice].authorizationStatus === AuthorizationStatus.Auth;

export const getUser = (state: State) => state[storeSlice].user;

export const getLoginStatus = (state: State) => state[storeSlice].loginStatus;
