import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { khaltiConfig } from "./khaltiConfig";
import { useState } from "react";

export default function Khalti(props) {
  const { price, productName, productIdentity } = props.detailSubs;
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const subDetail = {
    subscribtionTier: productName,
    amount: price,
    startDate: "today",
    endDate: "6months",
    status: "active",
    paymentMethod: "khalti",
    data: "res.data of the api verification",
  };
  let checkout = new KhaltiCheckout(khaltiConfig(productName, productIdentity));
  let buttonStyles = {
    backgroundColor: "purple",
    padding: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    border: "1px solid white",
  };
  return (
    <button
      onClick={() => checkout.show({ amount: `${price}` })}
      style={buttonStyles}
    >
      Pay via Khalti
    </button>
  );
}
