import React from "react";
import KhaltiCheckout from "khalti-checkout-web";
import { khaltiConfig } from "./khaltiConfig";
import moment from "moment";
import { useDispatch } from "react-redux";
import { createSubscription } from "../../../features/subscription/subFetch";

export default function Khalti(props) {
  const { price, productName, productIdentity } = props.detailSubs;
  console.log(props.detailSubs);
  const dispatch = useDispatch();

  const now = moment();
  const subMonth =
    productIdentity === "1" ? "1 " : productIdentity === "6" ? " 6 " : "12";

  const subDetail = {
    trainerId: props.detailSubs?.trainerId, //schema difference for sub snd trainer sub
    subscribtionTier: productName,
    productIdentity: subMonth,
    amount: price,
    startDate: now.format("YYYY-MM-DD"),
    endDate: now.clone().add(subMonth, "months").format("YYYY-MM-DD"),
    status: "active",
    paymentMethod: "khalti",
  };
  const subTrainerDetail = {
    subscribtionTier: productName,
    productIdentity: subMonth,
    amount: price,
    startDate: now.format("YYYY-MM-DD"),
    endDate: now.clone().add(subMonth, "months").format("YYYY-MM-DD"),
    status: "active",
    paymentMethod: "khalti",
  };

  const createSub = () => {
    if (productName === "trainer") {
      // subTrainerDetail
      console.log("this this");
    } else if (productName !== "trainer") {
      dispatch(createSubscription(subDetail)); //api hit for subscription
    }
  };
  let config = khaltiConfig(productName, productIdentity, createSub);
  let checkout = new KhaltiCheckout(config);
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
