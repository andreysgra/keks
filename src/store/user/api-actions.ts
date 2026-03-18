import {TUser, TUserAuth, TUserRegistration} from '../../types/user';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';
import {saveToken} from '../../services/token';
import browserHistory from '../../services/browser-history';

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

export const registerUser = createAsyncThunk<TUser, TUserRegistration, {extra: AxiosInstance}>(
  `${StoreSlice.User}/registration`,
  async ({name, email, password}, {extra: api}) => {
    const {data} = await api.post<TUser>(ApiRoute.Registration, {name, email, password});
    const {token} = data;

    saveToken(token);
    browserHistory.back();

    return data;
  }
);
