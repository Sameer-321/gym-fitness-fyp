import React, { useEffect } from "react";
import Cookies from "universal-cookie";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import {useDispatch } from "react-redux";
import Pricing from "./components/UI/Pricing";
import ContactUs from "./components/UI/ContactUs";
import { getMe } from "./features/auth/authFetch";
import Profile from "./components/UI/Profile";
import Payment from "./pages/Payment";


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
    console.log("please login again!!!")
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
          <Route path="/pay" element={<Payment/>} />
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
