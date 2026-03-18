import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TUserState} from './type';
import {fetchUserStatus, loginUser, registerUser} from './api-actions';
import {TUser} from '../../types/user';
import {AuthorizationStatus, RequestStatus} from '../../services/api/const';

const initialState: TUserState = {
  user: null,
  registrationStatus: RequestStatus.Idle,
  authorizationStatus: AuthorizationStatus.Unknown
};

const userSlice = createSlice({
  name: StoreSlice.User,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserStatus.fulfilled, (state, action: PayloadAction<TUser>) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(fetchUserStatus.pending, (state) => {
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(fetchUserStatus.rejected, (state) => {
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<TUser>) => {
        state.user = action.payload;
        state.registrationStatus = RequestStatus.Success;
      })
      .addCase(registerUser.pending, (state) => {
        state.registrationStatus = RequestStatus.Pending;
      })
      .addCase(registerUser.rejected, (state) => {
        state.registrationStatus = RequestStatus.Error;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<TUser>) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      });
  }
});

export default userSlice;
