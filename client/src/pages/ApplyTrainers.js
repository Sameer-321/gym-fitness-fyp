import React, { useState } from "react";
import axios from "axios"
export const ApplyTrainers = (props) => {

  const {info}=props
  console.log(info,6)
  console.log(info.id,7)

  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    const user_id=123
    await axios
      .post(`http://localhost:5000/api/v1/admin/trainers/createRequest`, formData, {
        headers: { Authorization: "send local token from cookies" },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fileUpload">Select a file to upload:</label>
      <input type="file" id="fileUpload" onChange={handleFileChange} />
      <button type="submit" disabled={!file}>
        Upload
      </button>
    </form>
  );
};

export default ApplyTrainers;
