import axios from "axios";
import Cookies from "universal-cookie";

const URL = "http://localhost:5000/api/v1";

export const getTrainerInfo = async (id) => {
  const cookies = new Cookies();

  try {
    const response = await axios.get(`${URL}/trainer-profile/${id}`, {
      headers: {
        "Content-Type": "application/json",
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
};
