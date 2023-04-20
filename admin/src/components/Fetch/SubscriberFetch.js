import axios from "axios";
import Cookies from "universal-cookie";

const URL = "http://localhost:5000/api/v1";

export const getAllSubscriber = async () => {
  const cookies = new Cookies();

  try {
    const response = await axios.get(
      `${URL}/subscribe/getAllSubscriptionDetail`,
      {
        headers: {
          Authorization: `Bearer ${cookies.get("token")}`,
        },
      }
    );
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
