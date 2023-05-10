import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "http://localhost:5000/api/v1/trainer-sub/";

export const createTrainerSubscription = createAsyncThunk(
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
        console.log(datas, "aaaaaaaaaaaaaaa");
        const response = await axios.post(URL.concat(`create/${id}`), datas, {
          headers,
        });
        console.log(response.data);
        if (response.status === 200) {
          //create conversation models

          const res = await axios.post(
            `http://localhost:5000/api/v1/conversations`,
            { senderId: datas.trainerId, receiverId: id },
            {
              headers,
            }
          );
        }
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

export const getTrainerSubscriptionDetail = createAsyncThunk(
  "getTrainerSubscriptionDetail",
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
        // console.log(response.data, "getDetailOfSingleSubscription");
        return response.data;
      } catch (err) {
        console.log(err);
      }
    }
  }
);
