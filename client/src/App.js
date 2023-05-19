import React, { useEffect, useState } from "react";

import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Pricing from "./components/UI/Pricing";
import ContactUs from "./components/UI/ContactUs";
import { getMe } from "./features/auth/authFetch";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import RequireAuthUser from "./components/RequireAuthUser";
import { info, status } from "./features/auth/authSlice";
import Cookies from "universal-cookie";
import { ApplyTrainers } from "./pages/ApplyTrainers";
import { UpdateProfile } from "./components/Modal/UpdateProfile";
import { Rough } from "./pages/Rough";
import { Messenger } from "./components/ChatApp/Messenger/Messenger";
import { Loading } from "./components/assests/Loading";
import { getTrainerSubscriptionDetail } from "./features/TrainerSubscription/trainerSubFetch";
////imports for Traienrs******
import { TrainerPendingForm } from "./components/trainerSection/Trainer-Form/TrainerPendingForm";

import { TrainerProfile } from "./components/trainerSection/TrainerProfile.js/TrainerProfile";
import { TrainerFrame } from "./components/trainerSection/pages/TrainerFrame";
import { getSubscriptionDetail } from "./features/subscription/subFetch";
import { getTrainerInfo } from "./features/trainer/trainerFetch";
import Trainers from "./pages/Trainers";
import Login from "./components/UI/Login";
import Register from "./components/UI/Register";
function App() {
  const dispatch = useDispatch();
  const informationUser = useSelector(info);
  const isLoading = useSelector(status);

  const [userInfo, setUserInfo] = useState(informationUser);
  // console.log(userInfo);
  const cookies = new Cookies();
  const token = cookies.get("token");

  useEffect(() => {
    dispatch(getMe());
  }, []);
  useEffect(() => {
    setUserInfo(informationUser);
  }, [informationUser]);
  useEffect(() => {
    dispatch(getTrainerInfo(userInfo.id));
  }, [userInfo.id]);

  useEffect(() => {
    dispatch(getSubscriptionDetail());
  }, [userInfo.id]);

  useEffect(() => {
    dispatch(getTrainerSubscriptionDetail());
  }, [userInfo.id]);

  return (
    <>
      {isLoading === "loading" || userInfo.role === "loading" ? (
        <Loading />
      ) : userInfo.role === "user" ||
        userInfo.role === "all" ||
        userInfo.role === "admin" ? ( //admin can only check
        <Routes>
          <Route path="/" element={<Layout userInfo={userInfo} />}>
            //public route
            <Route index element={<Home userInfo={userInfo} />} />
            {/* <Route path="/login" element={<LoginRegister />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/subs" element={<Pricing />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/trainers/profile" element={<TrainerProfile />} />
            {/* <Route path="/trainers-profile" element={<ShowTrainersProfile />} /> */}
            <Route path="*" element={<Notfound />} />
            //protected route
            <Route
              path="/pay"
              element={
                <RequireAuthUser roleProps="user" info={userInfo}>
                  <Payment />
                </RequireAuthUser>
              }
            />
            <Route
              path="/apply-trainer"
              element={
                <RequireAuthUser roleProps={"user"} info={userInfo}>
                  <ApplyTrainers info={userInfo} />
                </RequireAuthUser>
              }
            />
            <Route path="/messenger" element={<Messenger info={userInfo} />} />
          </Route>
          <Route path="/check" element={<UpdateProfile />} />
          <Route path="/rough" element={<Rough />} />
        </Routes>
      ) : userInfo.role === "trainer-pening" || userInfo.role === "trainer" ? (
        <Routes>
          {userInfo.role === "trainer-pending" ? (
            <Route index element={<TrainerPendingForm />} />
          ) : (
            <Route path="/" element={<TrainerFrame userInfo={userInfo} />}>
              {/* <Route index element={<TrainerProfile />} /> */}
              <Route
                path="/messenger"
                element={<Messenger info={userInfo} />}
              />
            </Route>
          )}
          //public route
          <Route path="*" element={<Notfound />} />
        </Routes>
      ) : (
        window.location.reload()
      )}
    </>
  );
}

export default App;
