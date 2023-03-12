import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import { useSelector, useDispatch } from "react-redux";
import { err, token, getToken } from "./features/auth/authSlice";
import Pricing from "./components/UI/Pricing";
import ContactUs from "./components/UI/ContactUs";
import { getMe } from "./features/auth/authFetch";
import Profile from "./components/UI/Profile";


function App() {
  const dispatch = useDispatch()
  const cookies = new Cookies();

useEffect(()=>{
  const token = cookies.get('token');
  if (token) {
    console.log(token)
    dispatch(getMe(token))
    // User is authenticated, handle accordingly
  } else {
    // User is not authenticated, handle accordingly
  } 
},[])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          //public route
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginRegister />} />
          <Route path="/subs" element={<Pricing />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="*" element={<Notfound />} />

          {/* //protected route
          <Route element={<RequireAuth/>} >
            <Route path="asdf" element/>
          </Route> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
