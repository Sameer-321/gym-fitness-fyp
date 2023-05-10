import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { info } from "../features/auth/authSlice";
import { PencilSquareIcon } from "@heroicons/react/20/solid";
import axios from "axios";

import { UpdateProfile } from "../components/Modal/UpdateProfile";
import { SubscriptionDetail } from "../components/UI/SubscriptionDetail";
import { isSubscriber } from "../features/subscription/subSlice";
import { isTrainerSubscriber } from "../features/TrainerSubscription/trainerSubSlice";
function Profile() {
  const [userInfo, setUserInfo] = useState();
  const [pic, setPic] = useState("");
  const [popUp, setPopUp] = useState(false);

  const userInformation = useSelector(info);
  const gym = useSelector(isSubscriber);
  const trainer = useSelector(isTrainerSubscriber);
  useEffect(() => {
    setUserInfo(userInformation);
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
      <div className="flex mt-[12%] max-w-[100%]">
        <div className="lg:w-[40%] ml-[60px] relative ">
          <div className="absolute top-[5px] right-[15%]">
            <button
              className=" ml-auto text-gray-500 p-2 hover:bg-gray-100 rounded-full"
              title="Edit profile"
              onClick={() => {
                handleClick();
              }}
            >
              <PencilSquareIcon className="h-4 w-4" />
            </button>
          </div>

          <img
            className="w-56 h-56 p-6 mx-auto mb-4 mt-1 border rounded-full"
            src={imageRender()}
            alt="profile image"
            loading="lazy"
          />
          <p className="text-base text-center font-semibold text-[32px] mt-[25px]">
            {userInfo?.name}
          </p>
        </div>

        <div className="flex-col max-w-[60%] ml-3">
          <h1 className="text-3xl text-purple-600 font-semibold ">Detail:</h1>
          <br />

          <div className="border-b-2   my-6">
            <span className="font-semibold pr-[30px]  ">e-mail </span>
            <span className="ml-[60px]">{userInfo?.email}</span>
          </div>
          <div className="border-b-2   my-6">
            <span className="font-semibold pr-[30px]">name </span>
            <span className="ml-14">{userInfo?.name}</span>
          </div>
          <div className="border-b-2  my-6">
            <span className="font-semibold pr-[30px]">role </span>
            <span className="ml-14 pl-6">{userInfo?.role}</span>
          </div>
          <div className="border-b-2 my-6">
            <span className="font-semibold pr-[30px]">gym subscriber </span>
            <span className="ml-2">{gym === true ? "yes" : "no"}</span>
          </div>
          <div className="border-b-2 my-6">
            <span className="font-semibold pr-[30px]">trainer subscriber </span>
            <span className="ml-2">{trainer === true ? "yes" : "no"}</span>
          </div>
        </div>
      </div>

      <UpdateProfile state={popUp} info={userInfo} />

      <SubscriptionDetail />
    </>
  );
}

export default Profile;
