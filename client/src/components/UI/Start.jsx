import React from "react";
import "../../styles/start.css";
import trainerImg from "../../assets/img/trainer.jpeg";

const Start = () => {
  return (
    <section id="classes">
      <div className="container">
        <div className="start__wrapper">
          <div className="start__img">
            <img
              src={trainerImg}
              alt="image of saroj guru"
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>

          <div
            className="start__content"
            data-aos="fade-right"
            data-aos-duration="1500"
          >
            <h2 className="section__title">
              Ready to make a <span className="highlights">change?</span>
            </h2>
            <p>
            Ready to transform your body and mind? Let's do this! Our gym is here to help you make the change you want to see. 
            Take the first step, and let's achieve your goals together!
            </p>

          <a href="/login" >
          <button className="register__btn">Get Started</button>
          </a>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
