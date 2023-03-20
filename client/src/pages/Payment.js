import React from "react";
import Stripe from "../components/payment/Stripe/Stripe.jsx";
import Khalti from "../components/payment/Khalti/Khalti"
export default function Payment() {
  return (
    <>
      <div>
        <Stripe />
      </div>
      <br/>
      <div>
        <Khalti/>
      </div>
    </>
  );
}
