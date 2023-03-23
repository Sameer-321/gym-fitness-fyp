import React, { useState } from "react";
import { useSelector } from "react-redux";
import { name, email } from "../features/auth/authSlice";
import axios from "axios";
function Profile() {
  const nam = useSelector(name);
  const emai = useSelector(email);

  const [pic, setPic] = useState("");
  console.log(pic, "noob");
  const imageUpload = (e) => {
    setPic(e.target.files[0]);
  };
  const submitButton = async () => {
    const formData = new FormData()
    formData.append("image",pic)
    await axios.post('http://localhost:5000/api/v1/upload/img',
    formData,{headers:{'Authorization':"send local token from cookies"}})
    .then((res)=>{
      console.log(res.data)
    })
  };
  return (
    <>
      <p>
        Hello, <b> {nam}</b> <br />
        your email is {emai}
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        <label>Upload photo</label>
        <input type="file" name="photo-upload" onChange={imageUpload} />
        <button onClick={submitButton}>Submit</button>
      </div>
    </>
  );
}

export default Profile;
