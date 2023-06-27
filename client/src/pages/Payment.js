import React from "react";
import { useLocation } from "react-router-dom";
import Khalti from "../components/payment/Khalti/Khalti";
import { useState, useEffect } from "react";
import moment from "moment";

export default function Payment() {
  const location = useLocation();
  const myData = location.state?.myData;

  return (
    //subscription is made after the khalti payment
    <>
      <br />
      <div className=" ml-[40%] my-[20%]">
        <Khalti detailSubs={myData} />
      </div>
    </>
  );
}
