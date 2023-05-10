import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";

const URL = "http://localhost:5000/api/v1";

export const getTrainerInfo = createAsyncThunk(
  "trainerInfo",
  async (id, { getState, dispatch }) => {
    const userId = getState().auth.id;
    const token = getState().auth.jwt;
    try {
      const response = await axios.get(`${URL}/trainer-profile/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response, "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
      return response.data;
    } catch (err) {
      // if (!err?.response) {
      //   console.log("NO Server Response");
      // } else if (err?.response?.status === 400) {
      //   console.log("Missing Password or UserName");
      // } else if (err?.response?.status === 401) {
      //   console.log("UnAuthorized");
      // }
      // console.log(err);
    }
  }
);
