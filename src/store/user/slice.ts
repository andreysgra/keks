import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TUserState} from './type';
import {fetchUserStatus, loginUser, logoutUser, registerUser} from './api-actions';
import {TUser} from '../../types/user';
import {AuthorizationStatus, RequestStatus} from '../../services/api/const';

const initialState: TUserState = {
  user: null,
  registrationStatus: RequestStatus.Idle,
  authorizationStatus: AuthorizationStatus.Unknown,
  loginStatus: RequestStatus.Idle
};

const userSlice = createSlice({
  name: StoreSlice.User,
  initialState,
  reducers: {
    setRegistrationStatus: (state, action: PayloadAction<RequestStatus>) => {
      state.registrationStatus = action.payload;
    }
  },
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
        state.loginStatus = RequestStatus.Success;
      })
      .addCase(loginUser.pending, (state) => {
        state.loginStatus = RequestStatus.Pending;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loginStatus = RequestStatus.Error;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  }
});

export const {setRegistrationStatus} = userSlice.actions;

export default userSlice;
