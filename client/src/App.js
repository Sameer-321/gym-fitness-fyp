import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
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
import Profile from "./components/UI/Profile";
import Payment from "./pages/Payment";
import RequireAuthUser from "./components/RequireAuthUser";
import { info } from "./features/auth/authSlice";
function App() {
  const dispatch = useDispatch();
  const informationUser = useSelector(info);
  
  const cookies = new Cookies();

  const [userInfo, setuserInfo] = useState(informationUser);
  console.log(userInfo)
  useEffect(() => {
    const token = cookies.get("token");
    if (token) {
      console.log(token);
      dispatch(getMe(token));
      // User is authenticated, handle accordingly
    } else {
      // User is not authenticated, handle accordingly
      console.log("please login again!!!");
    }
  }, []);

  useEffect(() => {
    setuserInfo(informationUser);
    console.log(informationUser)
  }, [informationUser]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          //public route
          <Route index element={<Home />} />
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
        </Route>
      </Routes>
    </div>
  );
}

export default App;
