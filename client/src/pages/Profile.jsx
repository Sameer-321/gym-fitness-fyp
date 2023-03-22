import React, { useState } from "react";
import { useSelector } from "react-redux";
import { name, email } from "../features/auth/authSlice";

function Profile() {
  const nam = useSelector(name);
  const emai = useSelector(email);

  const [pic, setPic] = useState("");
  const imageUpload = (e) => {
    setPic(e.target.files[0]);
    console.log(e.target.files[0])
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
      </div>
    </>
  );
}

export default Profile;
