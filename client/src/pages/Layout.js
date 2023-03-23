import React from "react";
import Header from "../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/UI/Footer";

export default function Layout(userInfo) {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
