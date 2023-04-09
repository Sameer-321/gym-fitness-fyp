import React, { useEffect, useState } from "react";

import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import { useDispatch, useSelector } from "react-redux";
import Pricing from "./components/UI/Pricing";
import ContactUs from "./components/UI/ContactUs";
import { getMe } from "./features/auth/authFetch";
import Profile from "./pages/Profile";
import Payment from "./pages/Payment";
import RequireAuthUser from "./components/RequireAuthUser";
import { info } from "./features/auth/authSlice";
import Cookies from "universal-cookie";
import { ApplyTrainers } from "./pages/ApplyTrainers";
import { UpdateProfile } from "./components/Modal/UpdateProfile";
import Rough from "./pages/Rough";
import { Messenger } from "./components/ChatApp/Messenger/Messenger";
function App() {
  const dispatch = useDispatch();
  const informationUser = useSelector(info);

  const [userInfo, setUserInfo] = useState(informationUser);
  // console.log(userInfo)

  useEffect(() => {
    setUserInfo(informationUser);
    //console.log(informationUser);
  }, [informationUser]);

  const cookies = new Cookies();
  const token = cookies.get("token");
  useEffect(() => {
    dispatch(getMe(token));
  }, []);

  return (
    <div>
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
              <RequireAuthUser roleProps="user" info={userInfo}>
                <ApplyTrainers info={userInfo} />
              </RequireAuthUser>
            }
          />
          <Route
            path="/messenger"
            element={
              <RequireAuthUser roleProps={"user" || "trainer"} info={userInfo}>
                <Messenger info={userInfo} />
              </RequireAuthUser>
            }
          />
        </Route>
        <Route path="/check" element={<UpdateProfile />} />
        <Route path="/rough" element={<Rough />} />
      </Routes>
    </div>
  );
}

export default App;
