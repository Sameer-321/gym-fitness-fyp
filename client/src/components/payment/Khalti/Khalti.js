import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { khaltiConfig } from "./khaltiConfig";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { createSubscription } from "../../../features/subscription/subFetch";
import { id } from "../../../features/auth/authSlice";

export default function Khalti(props) {
  const { price, productName, productIdentity } = props.detailSubs;

  const dispatch = useDispatch();
  const userId =useSelector(id)
 
  const now = moment();
  const subMonth =
    productIdentity === "1" ? 1 : productIdentity === "6" ? 6 : 12;

  const subDetail = {
    subscribtionTier: productName,
    amount: price,
    startDate: now.format("YYYY-MM-DD"),
    endDate: now.clone().add(subMonth, "months").format("YYYY-MM-DD"),
    status: "active",
    paymentMethod: "khalti",
  };

  const createSub = () => {
  
    dispatch(createSubscription(subDetail));
  };

  let checkout = new KhaltiCheckout(
    khaltiConfig(productName, productIdentity, createSub)
  );
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
