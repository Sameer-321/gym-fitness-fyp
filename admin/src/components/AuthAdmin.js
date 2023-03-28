import React from "react";
import { Outlet } from "react-router-dom";
import { AdminFrame } from "./AdminFrame";
import { Login } from "./Login";

export function AuthAdmin(props) {
  //const {propsRole} = props
  const propsRole = "admin";
  const requireRole = "admin";
  const checkAdmin = () => {
    return propsRole === requireRole;
  };
  return <>{checkAdmin ? <AdminFrame /> : <Login />}</>;
}
