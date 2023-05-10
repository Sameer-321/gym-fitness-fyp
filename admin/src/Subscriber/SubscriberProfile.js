import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { info } from "../features/auth/authSlice";

import { SubscriptionDetailCard } from "./SubscriptionDetailCard";
import ProfileCard from "../components/ProfileCard/ProfileCard";

//api imports
import { getUser } from "../components/Fetch/UserFetch";

function Profile() {
  const location = useLocation();
  const myData = location.state.subscriptionDetail;
  const profile = location.state.userProfile;
  console.log(profile);
  return (
    <>
      <ProfileCard userProfile={profile} />
      <SubscriptionDetailCard subInfo={myData} name={profile.name} />
    </>
  );
}

export default Profile;
