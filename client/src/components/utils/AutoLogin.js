import Cookies from "universal-cookie";
import { useDispatch, useSelector } from "react-redux";
import { getMe } from "../../features/auth/authFetch";
import { useEffect, useState } from "react";
import { info } from "../../features/auth/authSlice";
import App from "../../App";

export default function AutoLogin(children) {
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const token = cookies.get("token");

  
  useEffect(() => {
    autologin();
  }, []);
  const autologin = () => {
    if (token ){ 
      return dispatch(getMe(token))
    } 
    // User is authenticated, handle accordingly
    else return console.log("please login again!!!");
    // User is not authenticated, handle accordingly
  };

  return <App/>
}
