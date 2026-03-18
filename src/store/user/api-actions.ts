import {TUser, TUserRegistration} from '../../types/user';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {StoreSlice} from '../const';
import {ApiRoute} from '../../services/api/api-route';
import {saveToken} from '../../services/token';
import browserHistory from '../../services/browser-history';

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
