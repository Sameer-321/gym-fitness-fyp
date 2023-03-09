import React from "react";
import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "http://localhost:5000/api/v1/auth/";
// const REGISTER_URL = "http://localhost:5000/api/v1/register";

const initialState = {
  posts: [],
  status: "idle", //idle,loading,succeeded,failed
  error: null,
};

export const loginfetch= createAsyncThunk("login", async (credentials) => {
  try {
    const response = await axios.post(URL.concat("login"), credentials);
    //.log(response.data)
    console.log(response.data);
    return response.data;
  } catch (err) {
    if (!err?.response) {
      console.log("NO Server Response");
    } else if (err?.response?.status === 400) {
      console.log("Missing Password or UserName");
    } else if (err?.response?.status === 401) {
      console.log("UnAuthorized");
    }
    console.log(err);
  }
});

export const registerfetch= createAsyncThunk("register", async (credentials) => {
  const { username, email, password } = credentials;
  try {
    const response = await axios.post(URL.concat("register"), {
      username,
      email,
      password,
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    if (!err?.response) {
      console.log("NO Server Response");
    } else if (err?.response?.status === 400) {
      console.log("Missing Password or UserName");
    } else if (err?.response?.status === 401) {
      console.log("UnAuthorized");
    }
    console.log(err);
  }
});

//  try{
//       const userData = await loginUser({email,password}).unwrap()
//       console.log("from",userData)
//      // dispatch(setCredentials({...userData,email}))
//       setInfo({
//         email: "",
//         password: "",
//       })

//       nav('/')
//     }catch(err){
//       if(!err?.response){
//         setErrMsg("NO Server Response")
//       }  else if(err?.response?.status===400){
//         setErrMsg("Missing Password or UserName")
//       } else if(err?.response?.status===401){
//         setErrMsg("UnAuthorized")
//       }
//       console.log(err)
//     }
