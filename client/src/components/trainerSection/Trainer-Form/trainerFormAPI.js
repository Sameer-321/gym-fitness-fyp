import Cookies from "universal-cookie";
import axios from "axios";

export const submitCertificates = async (pictures, id) => {
  const cookies = new Cookies();
  //for certificates
  console.log(pictures, 3);
  const URL = `http://localhost:5000/api/v1/trainer-profile/uploadCertificates/${id}`;

  const formData = new FormData();

  for (let index = 0; index < pictures.length; index++) {
    const file = pictures[index];
    formData.append("file", file);
  }

  const headers = {
    "Content-Type": "multipart/form-data",
    authorization: `Bearer ${cookies.get("token")}`,
  };

  try {
    const response = await axios.put(URL, formData, { headers });

    return response;
  } catch (err) {
    console.log(err);
  }
  return formData;
};

export const submitPhotos = async (pictures, id) => {
  const cookies = new Cookies();
  //for certificates

  const URL = `http://localhost:5000/api/v1/trainer-profile/uploadPhotos/${id}`;
  const formData = new FormData();
  for (let index = 0; index < pictures.length; index++) {
    const file = pictures[index];
    formData.append("file", file);
  }
  const headers = {
    "Content-Type": "multipart/form-data",
    authorization: `Bearer ${cookies.get("token")}`,
  };
  try {
    const response = await axios.put(URL, formData, { headers });
    return response;
  } catch (err) {
    console.log(err);
  }
  return formData;
};
