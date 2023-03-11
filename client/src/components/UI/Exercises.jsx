import React from "react";
import "../../styles/exercises.css";
import lunges from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga-pose.png";
import extended from "../../assets/img/extended.png";
import leader from "../../assets/img/leader.png"
const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container exercise__container">
        <div className="exercise__top">
          <h2 className="section__title">
            Benefits of <span className="highlights">Exercise</span>
          </h2>
          <p>
          Exercise not only changes your body.<br/>
           It changes your mind, your attitude, and your mood.
          </p>
        </div>

        {/* ========== exercise list ======== */}
        <div className="exercise__wrapper">
          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={ yoga} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Mind</h4>
              <p>Exercise transforms not just your body, but also your mind.</p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={lunges} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Body</h4>
              <p>Exercise is the key to unlocking a positive and energized mind.</p>
            </div>
          </div>

          <div
            className="exercise__item"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="exercise__icon">
              <img src={leader} alt="" />
            </span>

            <div className="exercise__content">
              <h4>Personality</h4>
              <p>Embrace the rush, push forward, and feel the change!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exercises;
