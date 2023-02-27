import axios from "axios";

export const login = async (up) => {
  console.log(up);
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/auth/login",
      up
    );
    const data = response;
    console.log(data);

  } catch (err) {
    console.log("error while log in:", err);
  }
};

export const register = async(up) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/v1/auth/register",
      up
    );
    const data = response;
    console.log(data);

  } catch (err) {
    console.log("error while log in:", err);
  }
};
