import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const URL = "http://localhost:5000/api/v1/subscribe/";

export const createSubscription = createAsyncThunk(
  "subscribe/create",
  async (datas, { getState }) => {
    const id = getState().auth.id;
    const token = getState().auth.jwt;

    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
    if (token) {
      try {
        const response = await axios.post(URL.concat(`create/${id}`), datas, {
          headers,
        });
        //console.log(response.data);
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
  }
);

export const getSubscriptionDetail = createAsyncThunk(
  "subscribe/getSubscriptionDetail",
  async (_, { getState }) => {
    const token = getState().auth.jwt;
    const id = getState().auth.id;
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
    // console.log(token, "-------", id);
    if (token) {
      try {
        const response = await axios.get(
          URL.concat(`getSubscriptionDetail/${id}`),
          { headers },
          {
            withCredentials: true,
            credentials: "include",
          }
        );
        if (response.status === 404) {
          //Not a subscriber
          return console.log("Not a user");
        }
        console.log(response.data, "getDetailOfSingleSubscription");
        return response.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
);
