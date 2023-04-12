import React, { useEffect, useState } from "react";

import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import { Routes, Route, redirect } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import { useDispatch, useSelector } from "react-redux";
import Pricing from "./components/UI/Pricing";
import ContactUs from "./components/UI/ContactUs";
import { getMe } from "./features/trainer/authFetchaaaa";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import RequireAuthUser from "./components/RequireAuthUser";
import { info, role, status } from "./features/auth/authSlice";
import Cookies from "universal-cookie";
import { ApplyTrainers } from "./pages/ApplyTrainers";
import { UpdateProfile } from "./components/Modal/UpdateProfile";
import { Rough } from "./pages/Rough";
import { Messenger } from "./components/ChatApp/Messenger/Messenger";
import { Loading } from "./components/assests/Loading";
function App() {
  const dispatch = useDispatch();
  const informationUser = useSelector(info);
  const userRole = useSelector(role);
  const isLoading = useSelector(status);

  const [userInfo, setUserInfo] = useState(informationUser);
  console.log(userInfo);

  useEffect(() => {
    setUserInfo(informationUser);
  }, [informationUser]);

  useEffect(() => {
    const cookies = new Cookies();
    const token = cookies.get("token");
    dispatch(getMe(token));
  }, []);

  return (
    <div>
      {isLoading === "loading" || userInfo.role == "loading" ? (
        <Loading />
      ) : userInfo.role === "user" || userInfo.role === "all" ? (
        <Routes>
          <Route path="/" element={<Layout userInfo={userInfo} />}>
            //public route
            <Route index element={<Home userInfo={userInfo} />} />
            <Route path="/login" element={<LoginRegister />} />
            <Route path="/subs" element={<Pricing />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
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
            <Route
              path="/messenger"
              element={
                <RequireAuthUser roleProps={"user"} info={userInfo}>
                  <Messenger info={userInfo} />
                </RequireAuthUser>
              }
            />
          </Route>
          <Route path="/check" element={<UpdateProfile />} />
          <Route path="/rough" element={<Rough />} />
        </Routes>
      ) : userInfo.role === "trainer" ? (
        <Routes>
          <Route path="/" element={<Layout userInfo={userInfo} />}>
            //public route
            <Route
              index
              element={
                <Rough
                  // image={image}
                  // appendImages={appendImages}
                  // removeImages={removeImages}
                  // errors={errors}
                />
              }
            />
            <Route path="*" element={<Notfound />} />
          </Route>
        </Routes>
      ) : (
        console.log("asdf")
      )}
    </div>
  );
}

export default App;
