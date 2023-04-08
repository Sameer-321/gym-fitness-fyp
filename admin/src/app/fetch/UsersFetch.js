import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";

const URL = "http://localhost:5000/api/v1/admin/users/";

export const getAllUsers = async () => {
  const cookies = new Cookies();

  if (cookies.get("token")) {
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${cookies.get("token")}`,
    };
    try {
      const response = await axios.get(
        URL.concat("allUsers?role=user"),
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
