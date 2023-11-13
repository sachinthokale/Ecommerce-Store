import {
  loginFailure,
  loginRequest,
  loginSuccess,
  registerFailure,
  registerRequest,
  registerSuccess,
} from "../Slice/authSlice";
import axios from "axios";
import {
  getUserFailure,
  getUserLogout,
  getUserRequest,
  getUserSuccess,
} from "../Slice/getUserSlice";

export const loginAction = (email, password) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/user/login",
      { email, password },
      config
    );
    dispatch(loginSuccess(data));

    localStorage.setItem("token", data.token);
  } catch (error) {
    dispatch(loginFailure(error.response.data.message));
  }
};

export const registerAction = (name, email, password) => async (dispatch) => {
  try {
    dispatch(registerRequest());
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/user/register",
      { name, email, password },
      config
    );
    dispatch(registerSuccess(data.message));
    localStorage.setItem("token", data.token);
  } catch (error) {
    dispatch(registerFailure(error.response.data.message));
  }
};

export const getUser = (token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    dispatch(getUserRequest());
    const { data } = await axios.post("/api/user/getuser", { token }, config);
    dispatch(getUserSuccess(data));
  } catch (error) {
    dispatch(getUserFailure(error.response.data.message));
  }
};
export const logoutAction = () => async (dispatch) => {
  try {
    localStorage.removeItem("token");
    dispatch(getUserLogout());
  } catch (error) {
    console.log(error);
  }
};
