import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  loading: false,
  error: null,
  message: null,
  isAuthenticated: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginRequest: (state) => {
      (state.loading = true), (state.isAuthenticated = false);
    },
    loginSuccess: (state, action) => {
      (state.loading = false),
        (state.token = action.payload.token),
        (state.message = action.payload.message),
        (state.isAuthenticated = true);
    },
    loginFailure: (state, action) => {
      (state.loading = false),
        (state.isAuthenticated = false),
        (state.error = action.payload);
    },
    registerRequest: (state) => {
      (state.loading = true), (state.isAuthenticated = false);
    },
    registerSuccess: (state, action) => {
      (state.loading = false),
        (state.isAuthenticated = true),
        (state.message = action.payload);
    },
    registerFailure: (state, action) => {
      (state.loading = false),
        (state.isAuthenticated = false),
        (state.error = action.payload);
    },
    clearErrors: (state) => {
      (state.loading = false), (state.message = null), (state.error = null);
    },
  },
});
export const {
  loginFailure,
  loginRequest,
  loginSuccess,
  registerFailure,
  registerRequest,
  registerSuccess,
  clearErrors,
} = loginSlice.actions;

export default loginSlice.reducer;
