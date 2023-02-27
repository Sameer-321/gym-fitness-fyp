import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Home from "./Home";
// import Footer from '../components/Footer'
export default function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      {/* <Footer/> */}
    </>
  );
}
