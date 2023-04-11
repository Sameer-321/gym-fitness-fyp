import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
// "/api/v1/admin/trainers/getall"
const URL = "http://localhost:5000/api/v1/admin/trainers/";

//***************All for the TRainer Request:*************
export const getAllTrainers = async (showCondition) => {
  const cookies = new Cookies();

  if (cookies.get("token")) {
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${cookies.get("token")}`,
    };
    try {
      const response = await axios.get(
        URL.concat(`getall?status=${showCondition}`),
        { headers },
        {
          withCredentials: true,
          credentials: "include",
        }
      );
      console.log(response.data, 24);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
};

export const AdminDecisionTrainersReq = async (id, Status) => {
  const cookies = new Cookies();

  if (cookies.get("token")) {
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${cookies.get("token")}`,
    };

    try {
      const response = await axios.put(
        URL.concat(`updateRequest/${id}`),
        { status: Status },
        { headers }
      );
      //console.log(response.data, 51);
      return response;
    } catch (err) {
      console.log(err);
    }
  }
};
