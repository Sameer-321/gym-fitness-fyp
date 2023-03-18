import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
export default function Payment() {
  const [product] = useState({
    name: "Monthly Gym membershio",
    totalPrice: 1,
    description: "Monthly payment",
  });
  const handleToken = async (token, addresses) => {
    try {
      const response = await axios.post("http://localhost:5000/api/v1/checkout", {
        token,
        product,
      });

      console.log(response.status);

      if (response.status === 200) {
        console.log("payment completed");
      } else {
        console.log("payment failed");
      }
    } catch (error) {
      console.error("Error while creating order:", error);
    }
  };
  return (
    <>
      <StripeCheckout
        stripeKey="pk_test_51MmvcYIJni8Lp9hbQLDzcNpRMhaH65Pi74yRZDQJvcZoZX3Kaw8fPNrCp7dFb6CaeihXgTZ6TyNgepWSxVvOa0I600rr3fWQIM"
        token={handleToken}
        amount={product.totalPrice * 100}
        name="Pant"
        billingAddress
        shippingAddress
      />
    </>
  );
}
