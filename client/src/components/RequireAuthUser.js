import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { isLoggedIn } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

function RequireAuthUser({ children }) {
  const isLogged = useSelector(isLoggedIn);
  const nav = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      // nav("/login");
      alert("Need to login for membership!!!");
    }
  }, [isLogged, nav]);

  if (isLogged) {
    return children;
  }

  return null;
}

export default RequireAuthUser;
