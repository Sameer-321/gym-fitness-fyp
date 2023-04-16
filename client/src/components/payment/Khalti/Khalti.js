import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { khaltiConfig } from "./khaltiConfig";

export default function Khalti(props) {
  
  const { price,productName,productIdentity } = props.detailSubs;

  let checkout = new KhaltiCheckout(khaltiConfig(productName,productIdentity ));
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
