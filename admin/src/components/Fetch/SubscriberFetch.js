import axios from "axios";
import Cookies from "universal-cookie";

const URL = "http://localhost:5000/api/v1/subscribe";
const cookies = new Cookies();
const token = cookies.get("token");

export const getAllSubscriber = async () => {
  try {
    const response = await axios.get(`${URL}/getAllSubscriptionDetail`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data)
    return response;
  } catch (err) {
    if (!err?.response) {
      console.log("NO Server Response");
    } else if (err?.response?.status === 401) {
      console.log("UnAuthorized");
    }
    console.log(err);
  }
};
export const getSingleSubscriptionDetail = async (id) => {
  try {
    const response = await axios.get(`${URL}/getSubscriptionDetail/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data)
    return response;
  } catch (err) {
    if (!err?.response) {
      console.log("NO Server Response");
    } else if (err?.response?.status === 401) {
      console.log("UnAuthorized");
    }
    console.log(err);
  }
};
