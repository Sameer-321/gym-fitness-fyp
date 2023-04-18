import { createSlice } from "@reduxjs/toolkit";
import Cookies from "universal-cookie";
import { loginfetch, registerfetch, getMe } from "./authFetch";

const cookies = new Cookies();

const initialState = {
  isLoggedIn: false,
  jwt: null,
  id: "",
  email: "",
  name: "",
  role: "all",
  profilePictureLink: "",
  status: "idle", //idle,loading,succeeded,failed
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      console.log("login called");
    },
    register(state, action) {
      const { token } = action.payload;
      console.log(token);
    },
    logout(state) {
      const cookies = new Cookies();
      cookies.remove("token");
      console.log("logging out");
      state.isLoggedIn = false;
      state.jwt = null;
      state.id = "";
      state.email = "";
      state.name = "";
      state.status = "idle";
      state.error = null;
      // Reload the page by js
      window.location.reload();
    },
    LoginLoading(state) {
      state = {
        // ...state,
        role: "loading",
        status: "loading", //idle,loading,succeeded,failed
        error: null,
      };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginfetch.pending, (state, action) => {
        state.status = "loading";
        state.role = "loading";
      })
      .addCase(loginfetch.fulfilled, (state, action) => {
        state.status = "succeeded";

        const { token } = action.payload;

        //state management
        state.isLoggedIn = true;
        state.jwt = token;
        state.status = "success";

        const cookies = new Cookies();

        //Set cookies
        cookies.set("token", action.payload.token, {
          expires: new Date(token.exp * 1000 * 60 * 60 * 24 * 30),
        });
        window.location.reload(true);
      })
      .addCase(loginfetch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(registerfetch.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      // .addCase(getMe.pending, (state) => {
      //   state.status = "loading";
      //   state.role = "loading";
      // })
      .addCase(getMe.fulfilled, (state, action) => {
        //console.log(action.payload);
        const data = action?.payload?.data;
        if (data) {
          const { email, name, _id, role } = data;
          state.isLoggedIn = true;
          state.id = _id;
          state.name = name;
          state.email = email;
          state.status = "success";
          state.role = role;
          state.profilePictureLink =
            action?.payload?.data?.profilePicture?.link;
          //token set at last
          const token = cookies.get("token");
          state.jwt = token;
        }
      })
      .addCase(getMe.rejected, (state, action) => {
        state.error = action.error.message;
        console.log(state.error);
      });
  },
});

export const isLoggedIn = (state) => state.auth.isLoggedIn;
export const token = (state) => state.auth.jwt;
export const name = (state) => state.auth.name;
export const email = (state) => state.auth.email;
export const status = (state) => state.auth.status;
export const err = (state) => state.auth.error;
export const id = (state) => state.auth.id;
export const Profile = (state) => state.auth?.profilePictureLink;
export const role = (state) => state.auth.role;

export const info = (state) => ({
  id: state.auth.id,
  isLoggedIn: state.auth.isLoggedIn,
  token: state.auth.jwt,
  name: state.auth.name,
  email: state.auth.email,
  role: state.auth.role,
  error: state.auth.error,
  status: state.auth.status,
  profilePictureLink: state.auth?.profilePictureLink,
});

export const { login, logout, register, getToken, LoginLoading } =
  authSlice.actions;
export default authSlice.reducer;
