"admin/users/:id";
import axios from "axios";
import Cookies from "universal-cookie";

const URL = "http://localhost:5000/api/v1/admin";

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
