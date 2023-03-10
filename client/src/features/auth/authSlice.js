import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
import { loginfetch, registerfetch,getMe } from "./authFetch";

const initialState = {
  isLoggedIn: false,
  jwt: "",
  status: "idle", //idle,loading,succeeded,failed
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
     
      const { success, token } = action.payload;
      console.log(success, token);
      state.jwt = token;
      
    },
    register(state, action) {
      const { token } = action.payload;
      console.log(token);
    },
    logout(state) {
      const cookies = new Cookies()

      state = {
        isLoggedIn: false,
        jwt: "",
        status: "idle", //idle,loading,succeeded,failed
        error: null,
      };
      cookies.remove ("token")
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginfetch.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(loginfetch.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Adding date and reactions
        //console.log(action.payload)
        state.isLoggedIn = true;
        state.jwt = action.payload.token;
        const cookies = new Cookies()
      //Set cookies
      cookies.set("token", token, {
        expires: new Date(token.exp * 1000 * 60 * 60 * 30),
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
        console.log("vayooooooooooooo")
        console.log(action.payload);
      })
      .addCase(getMe.rejected, (state, action) => {
        state.error =action.error.message
        console.log(state.error)
      });
      
  },
});

// export const selectAllPosts = (state) => state.posts.posts;
// export const getPostsStatus = (state) => state.posts.status;
// export const getPostsError = (state) => state.posts.error;
export const isLoggedIn = (state) => state.auth.isLoggedIn;
export const token = (state) => state.auth.jwt;
export const err = (state)=>state.auth.error

export const { login, register } = authSlice.actions;
export default authSlice.reducer;
