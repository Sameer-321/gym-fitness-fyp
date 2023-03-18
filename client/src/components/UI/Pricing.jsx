import React from "react";
import "../../styles/pricing.css";
import { useNavigate } from "react-router-dom";
const Sub = () => {
  const nav = useNavigate()
  return (
    <section>
      <div className="container">
        <div className="pricing__top">
          <h2 className="section__title">
            Gym <span className="highlights">Pricing</span> Plan
          </h2>
          <p>
            Our gym provides flexible pricing options beginning
            <br />
            at an affordable rate without any undisclosed fees or extended
            commitments.
          </p>
        </div>

        {/* ========== pricing wrapper =========== */}
        <div className="pricing__wrapper">
          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="pricing__card-top">
              <h2 className="section__title"> Monthly</h2>
              <h2 className="pricing section__title">Rs.2,000</h2>
            </div>

            <div className="services">
              <ul>
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
                {/* <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Personal trainer
                </li> */}
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
                <a href="/pay"><button className="register__btn">Join Now</button></a>
              
            </div>
          </div>

          <div
            className="pricing__item pricing__item-02"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">6 Month</h2>
              <h2 className="pricing section__title">Rs.11,000</h2>
            </div>

            <div className="services">
              <ul>
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
                  Free Online Personal Trainer
                </li>
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Sauna for 12 times
                </li>
                {/* <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  Standard options
                </li> */}
                <li>
                  <span>
                    <i className="ri-checkbox-blank-circle-fill"></i>
                  </span>
                  .....
                </li>
              </ul>

              <a href="/pay"><button className="register__btn">Join Now</button></a>
            </div>
          </div>

          <div
            className="pricing__item"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="pricing__card-top">
              <h2 className="section__title">Yearly</h2>
              <h2 className="pricing section__title">Rs.20,000</h2>
            </div>

            <div className="services">
              <ul>
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
                  Personal trainer
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
                 .....
                </li>
              </ul>

              <a href="/pay"><button className="register__btn">Join Now</button></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sub;
