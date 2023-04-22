import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { info } from "../features/auth/authSlice";

import { SubscriptionDetail } from "./SubscriptionDetail";
import ProfileCard from "../components/ProfileCard/ProfileCard";

//api imports
import { getUser } from "../components/Fetch/UserFetch";

function Profile() {
  const location = useLocation();
  const myData = location.state.profileDetail;

  return (
    <>
      <ProfileCard userId={myData.userInfo._id} />
      <SubscriptionDetail subInfo={myData} />
    </>
  );
}

export default Profile;
