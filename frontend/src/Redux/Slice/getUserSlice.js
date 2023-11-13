import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: null,
  message: null,
  isAuthenticated: false,
  user: null,
};

const getUserSlice = createSlice({
  name: "getUser",
  initialState,
  reducers: {
    getUserRequest: (state) => {
      state.loading = true;
      state.isAuthenticated = false;
      state.message = null;
    },
    getUserSuccess: (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.message = action.payload.message;
      state.user = action.payload.user;
    },
    getUserFailure: (state, action) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.error = action.payload.message;
    },
    getUserLogout: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.message = "null";
      state.error = "Logged out successfully";
      state.user = null;
    },
    clearUserError: (state) => {
      state.loading = false;

      state.message = null;
      state.error = null;
    },
  },
});
export const {
  getUserFailure,
  getUserRequest,
  getUserSuccess,
  getUserLogout,
  clearUserError,
} = getUserSlice.actions;

export default getUserSlice.reducer;
