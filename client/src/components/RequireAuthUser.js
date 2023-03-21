import React, { useEffect, useState } from "react";

import LoginPopup from "./UI/LoginPopUp";

export default function RequireAuthUser(props) {
  const { roleProps, children } = props;
  const [userInfo, setUserInfo] = useState(props.info);
  useEffect(() => {
    setUserInfo(props.info);
  }, [props.info]);

  const { isLoggedIn, role } = userInfo;
  const roleCheck = () => {
    return roleProps === role;
  }; //return in booleans
  return <>{isLoggedIn && roleCheck() ? children : <LoginPopup />}</>;
}
