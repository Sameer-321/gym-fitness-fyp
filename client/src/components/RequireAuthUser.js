import React, { useEffect, useState } from "react";

import LoginPopup from "./UI/LoginPopUp";

export default function RequireAuthUser({ isLogged, children }) {
  const [logStatus, setLogStatus] = useState(isLogged);
  useEffect(() => {
    setLogStatus(isLogged);
  }, [isLogged]);


  return <>
  {logStatus?(children):(
    <LoginPopup/>
  )}
  </>;
}
