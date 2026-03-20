import {TUser, TUserAuth, TUserRegistration} from '../../types/user';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';
import {dropToken, saveToken} from '../../services/token';
import browserHistory from '../../services/browser-history';
import {AppDispatch} from '../../types/state';

export const fetchUserStatus = createAsyncThunk<TUser, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.User}/fetch`,
  async (_, {extra: api}) => {
    const {data} = await api.get<TUser>(ApiRoute.Login);

    return data;
  }
);

export const loginUser = createAsyncThunk<TUser, TUserAuth, {extra: AxiosInstance}>(
  `${StoreSlice.User}/login`,
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<TUser>(ApiRoute.Login, {email, password});
    const {token} = data;

    saveToken(token);
    browserHistory.back();

    return data;
  }
);

export const logoutUser = createAsyncThunk<void, undefined, {extra: AxiosInstance}>(
  `${StoreSlice.User}/logout`,
  async (_, {extra: api}) => {
    await api.delete(ApiRoute.Logout);

    dropToken();
  }
);

export const uploadAvatar = createAsyncThunk<TUser, TUserRegistration, {extra: AxiosInstance}>(
  `${StoreSlice.User}/upload`,
  async ({avatar}, {extra: api}) => {
    const {data} = await api.post<TUser>(ApiRoute.Upload, {avatar}, {headers: {'Content-Type': 'multipart/form-data'}});

    return data;
  }
);

export const registerUser = createAsyncThunk<TUser, TUserRegistration, {
  extra: AxiosInstance;
  dispatch: AppDispatch;
}>(
  `${StoreSlice.User}/registration`,
  async ({name, email, password, avatar}, {extra: api, dispatch}) => {
    const {data} = await api.post<TUser>(ApiRoute.Registration, {name, email, password});
    const {token} = data;

    saveToken(token);

    if (avatar?.name) {
      await dispatch(uploadAvatar({name, email, password, avatar}));
    }

    dispatch(loginUser({email, password}));
    browserHistory.back();

    return data;
  }
);
