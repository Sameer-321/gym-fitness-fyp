import React from "react";
import { useLocation } from "react-router-dom";
import Khalti from "../components/payment/Khalti/Khalti";

export default function Payment() {
  const location = useLocation();
  const myData = location.state?.myData;
  console.log(myData);
  return (
    //subscription is made after the khalti payment
    <>
      <br />
      <div>
        <Khalti detailSubs={myData} />
      </div>
    </>
  );
}
