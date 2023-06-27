import React, { useEffect, useState } from "react";
import "../../styles/pricing.css";
import { useNavigate } from "react-router-dom";
import { isSubscriber } from "../../features/subscription/subSlice";
import { useSelector } from "react-redux";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

const Sub = () => {
  const subscriptionStatus = useSelector(isSubscriber);
  const nav = useNavigate();
  const [subscription, setSubscription] = useState(true);

  useEffect(() => {
    setSubscription(subscriptionStatus);
  }, [subscriptionStatus]);
  const handleClick = (price, productName, productIdentity) => {
    nav("/pay", {
      state: { myData: { price, productName, productIdentity } },
    });
  };
  return (
    <section>
      <div className="container mx-auto mt-[10%]">
        <div className="text-center">
          <h2 className="mb-8 text-4xl font-bold sm:text-5xl">
            Gym <span className="text-indigo-500">Pricing</span> Plan
          </h2>
          {subscriptionStatus && (
            <div className="flex  justify-center my-3">
              <div className="w-6 h-6 text-red-600">
                <ExclamationCircleIcon />
              </div>
              <p className="text-red-600">You already are a subscriber </p>
            </div>
          )}

          <p className="mb-10 text-xl sm:text-2xl">
            Our gym provides flexible pricing options beginning
            <br />
            at an affordable rate without any undisclosed fees or extended
            commitments.
          </p>
        </div>

        {/* ========== pricing wrapper =========== */}
        <div className="flex flex-col gap-10  lg:flex-row pricing__wrapper">
          <div
            className="w-full p-10  bg-indigo-300  shadow lg:px-6 lg:py-10 rounded-xl"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="px-6 pb-10 text-center border-b border-gray-300 lg:pb-6 lg:px-0">
              <h2 className="text-4xl lg:text-3xl">
                Rs.2,000<sub className="text-lg text-gray-600">/Month</sub>
              </h2>
            </div>

            <div className="pt-6 text-center">
              <ul className="flex flex-col gap-4 pb-10 text-xl">
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Free Cardio and Crossfit
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Drinking Water Supply
                </li>
              </ul>

              <button
                disabled={subscription}
                onClick={() => {
                  handleClick(1000, "1 month", "1");
                }}
                className="px-8 py-3  text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
              >
                Buy Now
              </button>
            </div>
          </div>

          <div
            className="w-full p-10 bg-indigo-300 shadow lg:px-6 lg:py-10 rounded-xl"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="px-6 pb-10 text-center border-b lg:pb-6 lg:px-0">
              <h2 className="text-4xl text-white lg:text-3xl">
                Rs.11,000<sub className="text-lg text-gray-200">/6 Months</sub>
              </h2>
            </div>

            <div className="pt-6 text-center">
              <ul className="flex flex-col gap-4 pb-10 text-xl text-white lg:pb-6">
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Unlimited access to the gym
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Free Online Picnics
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Sauna for 12 times
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Free access to other branch
                </li>
              </ul>

              <button
                disabled={subscription}
                onClick={() => {
                  handleClick(1100, "6 months", "6");
                }}
                className="px-8 py-3  text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
              >
                Buy Now
              </button>
            </div>
          </div>

          <div
            className="w-full p-10 bg-indigo-300 shadow lg:px-6 lg:py-10 rounded-xl"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="px-6 pb-10 text-center border-b  border-gray-300 lg:pb-6 lg:px-0">
              <h2 className="text-4xl lg:text-3xl">
                Rs.20,000<sub className="text-lg text-gray-600">/Year</sub>
              </h2>
            </div>

            <div className="pt-6 text-center">
              <ul className="flex flex-col gap-4 pb-10 text-xl">
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>{" "}
                  Sauna for every week
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Online Trainer for a year
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Chances of Rewards
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li>
              </ul>

              <button
                disabled={subscription}
                onClick={() => {
                  handleClick(1200, "1 year", "12");
                }}
                className="px-8 py-3  text-white bg-indigo-500 rounded-lg hover:bg-indigo-600"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sub;
