import { createReducer } from "@reduxjs/toolkit";

const initialState = {};

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('loginRequest', (state) => {
      state.loading = true;
    })
    .addCase('loginSuccess', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    })
    .addCase('loginFailure', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase('registerRequest', (state) => {
      state.loading = true;
    })
    .addCase('registerSuccess', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    })
    .addCase('registerFailure', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase('loadUserRequest', (state) => {
      state.loading = true;
    })
    .addCase('loadUserSuccess', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
    })
    .addCase('loadUserFailure', (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    })
    .addCase('logoutRequest', (state) => {
      state.loading = true;
    })
    .addCase('logoutSuccess', (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.user = null;
    })
    .addCase('logoutFailure', (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.error = action.payload;
    })
    .addCase('verificationRequest', (state) => {
      state.loading = true;
    })
    .addCase('verificationSuccess', (state, action) => {
      state.loading = false;
      state.isVerified = true;
      state.message = action.payload;
    })
    .addCase('verificationFailure', (state, action) => {
      state.loading = false;
      state.isVerified = false;
      state.error = action.payload;
    })
    .addCase('clearError', (state) => {
      state.error = null;
    })
    .addCase('clearMessage', (state) => {
      state.message = null;
    });
});

export const messageReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('addTaskRequest', (state) => {
      state.loading = true;
    })
    .addCase('addTaskSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('addTaskFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('updateTaskRequest', (state) => {
      state.loading = true;
    })
    .addCase('updateTaskSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('updateTaskFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('deleteTaskRequest', (state) => {
      state.loading = true;
    })
    .addCase('deleteTaskSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('deleteTaskFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('updateProfileRequest', (state) => {
      state.loading = true;
    })
    .addCase('updateProfileSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('updateProfileFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('updatePasswordRequest', (state) => {
      state.loading = true;
    })
    .addCase('updatePasswordSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('updatePasswordFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('forgetPasswordRequest', (state) => {
      state.loading = true;
    })
    .addCase('forgetPasswordSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('forgetPasswordFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('resetPasswordRequest', (state) => {
      state.loading = true;
    })
    .addCase('resetPasswordSuccess', (state, action) => {
      state.loading = false;
      state.message = action.payload;
    })
    .addCase('resetPasswordFailure', (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('clearError', (state) => {
      state.error = null;
    })
    .addCase('clearMessage', (state) => {
      state.message = null;
    });
});
