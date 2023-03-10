import React, { useEffect } from "react";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import { useSelector } from "react-redux";
// import { isLoggedIn } from "./features/auth/authSlice";
import { err } from "./features/auth/authSlice";


function App() {
   const select =useSelector(err)
  // console.log(select)
  useEffect(()=>{
    console.log(select)
  })
    
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          //public route
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginRegister />} />

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
