import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { loginfetch, registerfetch, getMe } from "./authFetch";

const cookies = new Cookies();

const initialState = {
  gender: null,
  trainerType: null,
  yearsofExperience: "",
  description: "",
  photos: "",
  certificates: "",
  userInfo: "",
  status: "idle", //idle,loading,succeeded,failed
  error: null,
};

const authSlice = createSlice({
  name: "trainer",
  initialState,
  reducers: {
    hello(state, action) {
      console.log("login called");
    }
    
  },
  extraReducers(builder) {
    builder
      .addCase(loginfetch.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginfetch.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "succeeded";
        console.log(action.payload);
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
      })
      .addCase(loginfetch.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(registerfetch.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getMe.fulfilled, (state, action) => {
        console.log(action.payload);
        const { email, name, _id, role } = action.payload.data;
        state.isLoggedIn = true;
        state.id = _id;
        state.name = name;
        state.email = email;
        state.status = "success";
        state.role = role;
        state.profilePictureLink = action.payload.data?.profilePicture?.link;
        //token set at last
        const token = cookies.get("token");
        state.jwt = token;
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

export const { login, logout, register, getToken, resetState } =
  authSlice.actions;
export default authSlice.reducer;
