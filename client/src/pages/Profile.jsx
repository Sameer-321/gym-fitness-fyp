import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { info } from "../features/auth/authSlice";

import axios from "axios";
function Profile() {
  

  const [userInfo, setUserInfo] = useState();
  const [pic, setPic] = useState("");

  const userInformation = useSelector(info)

  
  useEffect(() => {
    setUserInfo(userInformation);

  }, [userInformation]);
//   console.log(userInfo,16)
//    console.log(userInfo.profilePictureLink ,18)
  console.log(userInformation)
  const imageRender=()=>{
    if(userInfo?.profilePictureLink ){
        return  `http://localhost:5000/${userInfo?.profilePictureLink}`
    }
    else{
        return "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
    }
  }
    

  const imageUpload = (e) => {
    setPic(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const submitButton = async () => {
    const formData = new FormData();
    formData.append("file", pic);
    var user_id = "asdf";
    await axios
      .post(`http://localhost:5000/api/v1/upload/img/${user_id}`, formData, {
        headers: { Authorization: "send local token from cookies" },
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <>
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs">
          <div className="bg-white shadow-xl rounded-lg py-3">
            <div className="photo-wrapper p-2">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={`http://localhost:5000/${userInfo?.profilePictureLink}`}
                alt="NO Profile"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                {userInformation.name}
              
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <p>not verified</p>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Address
                    </td>
                    <td className="px-2 py-2">
                      Chatakpur-3, Dhangadhi Kailali
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Phone
                    </td>
                    <td className="px-2 py-2">+977 9955221114</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-semibold">
                      Email
                    </td>
                    <td className="px-2 py-2">john@exmaple.com</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center my-3">
                <a
                  className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                  href="#"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
