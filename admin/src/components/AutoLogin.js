import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../features/auth/authFetch";
import { useEffect, useState } from "react";

import App from "../App";
import { Login } from "./Login";

export default function AutoLogin(children) {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get("token");

  useEffect(() => {
    autologin();
  }, []);
  const autologin = () => {
    // console.log("GN")
    if (token) {
      return dispatch(getMe(token));
    }
    // User is authenticated, handle accordingly
    else return console.log("please log in again");
    // User is not authenticated, handle accordingly
  };

  return <App />;
}
