import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
import { id } from "../auth/authSlice";
const URL = "http://localhost:5000/api/v1";

export const getTrainerInfo = createAsyncThunk("trainerInfo", async (id) => {
  const cookies = new Cookies();
  try {
    const response = await axios.get(`${URL}/trainer-profile/${id}`, {
      headers: {
        Authorization: `Bearer ${cookies.get("token")}`,
      },
    });
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

export const registerfetch = createAsyncThunk(
  "register",
  async (credentials) => {
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
  }
);

export const getMe = createAsyncThunk("getMe", async (jwt_token) => {
  const cookies = new Cookies();
  const token = cookies.get("token");

  const headers = {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  };

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
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
});
