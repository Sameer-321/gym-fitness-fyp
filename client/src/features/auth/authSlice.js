import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { loginfetch,registerfetch } from "./authFetch";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const initialState = {
  isLoggedIn: false,
  jwt :"",
  status: 'idle', //idle,loading,succeeded,failed
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state,action){
 const{success,token}=action.payload
 console.log(success,token)
    },
    register(state, action) {
      const { token } = action.payload;
      console.log(token)
    }
    }
    ,
    extraReducers(builder) {
      builder
        .addCase(loginfetch.pending, (state, action) => {
          state.status = "loading";
          
        })
        .addCase(loginfetch.fulfilled, (state, action) => {
          state.status = "succeeded";
          // Adding date and reactions
          //console.log(action.payload)
          state.isLoggedIn=true;
          state.jwt = action.payload.token
        })
        .addCase(loginfetch.rejected, (state, action) => {
          state.status = "failed";
          state.error = action.error.message;
        })
      .addCase(registerfetch.fulfilled, (state, action) => {
        console.log(action.payload)
      })
    
  },
});

// export const selectAllPosts = (state) => state.posts.posts;
// export const getPostsStatus = (state) => state.posts.status;
// export const getPostsError = (state) => state.posts.error;
export const isLoggedIn = (state) => state.auth.isLoggedIn;
export const { login, register } = authSlice.actions;
export default authSlice.reducer;
