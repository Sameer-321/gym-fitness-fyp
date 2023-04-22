import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { info } from "../../../features/auth/authSlice";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import axios from "axios";
import { UpdateProfile } from "../../Modal/UpdateProfile";

export function TrainerProfileCard() {
  const [userInfo, setUserInfo] = useState();
  const [pic, setPic] = useState("");
  const [popUp, setPopUp] = useState(false);
  const userInformation = useSelector(info);

  useEffect(() => {
    setUserInfo(userInformation);
    console.log(userInformation);
  }, [userInformation]);

  const imageRender = () => {
    if (userInfo?.profilePictureLink) {
      return `http://localhost:5000/${userInfo?.profilePictureLink}`;
    } else {
      return "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png";
    }
  };

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
  const handleClick = () => {
    setPopUp(!popUp);
  };
  return (
    <>
      <div className="flex items-center h-screen w-full justify-center">
        <div className="max-w-xs -mt-12">
          <div className="bg-white shadow rounded-2xl py-3">
            <div className="px-4 flex">
              <button
                className="ml-auto text-gray-500 p-2 hover:bg-gray-100 rounded-full"
                title="Edit profile"
                onClick={() => {
                  handleClick();
                }}
              >
                <PencilSquareIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="photo-wrapper p-2">
              <img
                className="w-28 h-28 rounded-full mx-auto border"
                src={
                  userInfo?.profilePictureLink
                    ? `http://localhost:5000/${userInfo?.profilePictureLink}`
                    : "https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
                }
                //src={}
                alt="NO Avatar"
              />
            </div>
            <div className="p-2">
              <h3 className="text-center text-lg text-gray-900 mb-2 font-medium leading-8">
                {userInformation.name}
              </h3>
              <div className="text-center text-gray-400 text-xs font-semibold">
                <span className="px-3 py-1 rounded-full bg-green-400 text-white font-semibold">
                  Verified
                </span>
              </div>
              <table className="text-xs my-3">
                <tbody>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-normal">
                      Address
                    </td>
                    <td className="px-2 py-2">
                      Chatakpur-3, Dhangadhi Kailali
                    </td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-normal">
                      Phone
                    </td>
                    <td className="px-2 py-2">+977 9955221114</td>
                  </tr>
                  <tr>
                    <td className="px-2 py-2 text-gray-500 font-normal">
                      Email
                    </td>
                    <td className="px-2 py-2">{userInformation.email}</td>
                  </tr>
                </tbody>
              </table>

              <div className="text-center mt-3">
                <a
                  className="text-xs text-indigo-500  hover:underline hover:text-indigo-600 font-medium"
                  href="#"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <UpdateProfile state={popUp} info={userInfo} />
    </>
  );
}
