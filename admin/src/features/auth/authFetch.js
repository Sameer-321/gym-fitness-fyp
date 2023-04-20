import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const URL = "http://localhost:5000/api/v1/admin/";


export const loginfetch = createAsyncThunk("login", async (credentials) => {
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

export const getMe = createAsyncThunk("getMe", async (jwt_token) => {
  const headers = {
    "Content-Type": "application/json",
    authorization: `Bearer ${jwt_token}`,
  };

  const cookies = new Cookies();

  if (cookies.get("token")) {
    try {
      const response = await axios.get(
        URL.concat("me"),
        { headers },
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      // console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
});
