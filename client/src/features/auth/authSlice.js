import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
import { loginfetch, registerfetch, getMe } from "./authFetch";
import { useDispatch } from "react-redux";

const cookies = new Cookies();

const initialState = {
  isLoggedIn: false,
  jwt: null,
  id:"",
  email:"",
  name:"",
  status: "idle", //idle,loading,succeeded,failed
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      console.log("login called")

    },
    register(state, action) {
      const { token } = action.payload;
      console.log(token);
    },
    logout(state) {
      const cookies = new Cookies();
      state = {
        ...state,
        isLoggedIn: false,
        jwt: null,
        id:"",
        email:"",
        name:"",
        status: "idle", 
        error: null,
      };
      cookies.remove("token");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginfetch.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginfetch.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        const { token } = action.payload;

        //state management
        state.isLoggedIn = true;
        state.jwt = token;
        state.status="success"

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
        //console.log("vayooooooooooooo")
        console.log(action.payload);
        const {email,name,id}=action.payload.data
        state.isLoggedIn=true
        state.id=id
        state.name=name
        state.email=email
        state.status="success"
        //token set at last
        const token = cookies.get('token')
        state.jwt=token
      })
      .addCase(getMe.rejected, (state, action) => {
        state.error = action.error.message;
        console.log(state.error);
      });
  },
});

// export const selectAllPosts = (state) => state.posts.posts;
// export const getPostsStatus = (state) => state.posts.status;
// export const getPostsError = (state) => state.posts.error;
export const isLoggedIn = (state) => state.auth.isLoggedIn;
export const token = (state) => state.auth.jwt;
export const name = (state) => state.auth.name;
export const email = (state) => state.auth.email;
// export const name = (state) => state.auth.name;
export const err = (state) => state.auth.error;

export const { login, register, getToken } = authSlice.actions;
export default authSlice.reducer;
