"admin/users/:id";
import axios from "axios";
import Cookies from "universal-cookie";

const URL = "http://localhost:5000/api/v1/admin";

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

export const getUser = async (id) => {
  const cookies = new Cookies();

  try {
    const response = await axios.get(`${URL}/users/${id}`, {
      headers: {
        Authorization: `Bearer ${cookies.get("token")}`,
      },
    });
    return response.data;
  } catch (err) {
    if (!err?.response) {
      console.log("NO Server Response");
    } else if (err?.response?.status === 401) {
      console.log("UnAuthorized");
    }
    console.log(err);
  }
};
