import React from "react";

import { AdminFrame } from "./AdminFrame";
import { Login } from "./Login";

export function AuthAdmin(props) {
  const {propsRole,children} = props
  console.log(propsRole,8)
  // const propsRole = "admin";
  const requireRole = "admin";
  const checkAdmin = () => {
    return propsRole === requireRole;
  };
  return <>{checkAdmin ?  children: <Login />}</>;
}
