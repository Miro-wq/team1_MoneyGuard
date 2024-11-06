import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  register,
  logout,
  getUserInfo,
} from '../operations/authOperations';
import { refreshThunk } from '../../redux/Auth/operations';

const initialState = {
  user: { username: null, email: null, balance: null },
  error: null,
  isLoading: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: state => {
      state.error = null;
    },
  },
  extraReducers: builder => {
    builder
      // Login
      .addCase(login.pending, state => {
        state.isLoading = true;
        state.isAuthenticated = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.error = null;
        state.isLoading = false;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      // Register
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isLoading = false;
        state.error = null;
        state.isAuthenticated = true;
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      // Logout
      .addCase(logout.fulfilled, state => {
        state.user = null;
        state.error = null;
        state.isLoading = false;
        state.isAuthenticated = false;
      })
      .addCase(logout.pending, state => {
        state.isLoading = true;
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.isAuthenticated = true;
      })
      //Info pentru balance
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user = { ...action.payload };
        state.isAuthenticated = true;
      })
      .addCase(refreshThunk.pending, state => {
        state.isLoading = true;
        state.isAuthenticated = true;
      })
      .addCase(refreshThunk.rejected, state => {
        state.isLoading = false;
        state.isAuthenticated = false;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;
