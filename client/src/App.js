import React from "react";
import "./App.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Notfound from "./pages/Notfound";
import { Routes, Route } from "react-router-dom";
import LoginRegister from "./pages/LoginRegister";
import RequireAuth from "./features/auth/RequireAuth";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          //public route
          <Route index element={<Home />} />
          <Route path="/login" element={<LoginRegister />} />

          <Route path="*" element={<Notfound />} />
          
          //protected route
          <Route element={<RequireAuth/>} >
            <Route path="asdf" element/>
          </Route>
        </Route>
      </Routes>
 
    </div>
  );
}

export default App;
