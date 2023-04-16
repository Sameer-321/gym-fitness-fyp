import React from "react";
import { useLocation } from 'react-router-dom';
import Khalti from "../components/payment/Khalti/Khalti";

export default function Payment() {
  const location = useLocation();
  const myData = location.state?.myData;
  console.log(myData)
  return (
    <>
      <br />
      <div>
        <Khalti detailSubs={myData} />
      </div>
    </>
  );
}
