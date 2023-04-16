import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const URL = "http://localhost:5000/api/v1/subscribe/";

export const createSubscription = createAsyncThunk("login", async (datas) => {
  try {
    const response = await axios.post(URL.concat("subscription"), datas);
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

export const detailSubscription = createAsyncThunk("detail", async (id) => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const headers = {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  };
  if (cookies.get("token")) {
    try {
      const response = await axios.get(
        URL.concat(`${id}`),
        { headers },
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      console.log(response.data,"getDetailOfSingleSubscription");
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
});
