import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {StoreSlice} from '../const';
import {TUserState} from './type';
import {registerUser} from './api-actions';
import {TUser} from '../../types/user';
import {RequestStatus} from '../../services/api/const';

const initialState: TUserState = {
  user: null,
  registrationStatus: RequestStatus.Idle
};

const userSlice = createSlice({
  name: StoreSlice.User,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<TUser>) => {
        state.user = action.payload;
        state.registrationStatus = RequestStatus.Success;
      })
      .addCase(registerUser.pending, (state) => {
        state.registrationStatus = RequestStatus.Pending;
      })
      .addCase(registerUser.rejected, (state) => {
        state.registrationStatus = RequestStatus.Error;
      });
  }
});

export default userSlice;
