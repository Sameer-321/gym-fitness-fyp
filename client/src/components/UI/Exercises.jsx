import React from "react";
import "../../styles/exercises.css";
import lunges from "../../assets/img/lunges.png";
import yoga from "../../assets/img/yoga-pose.png";
import leader from "../../assets/img/leader.png";

const Exercises = () => {
  return (
    <section id="schedule">
      <div className="container">
        <div className="pt-12 text-center">
          <h2 className="mb-8 text-4xl font-bold sm:text-5xl">
            Benefits of <span className="text-indigo-500">Exercise</span>
          </h2>
          <p className="mb-10 text-xl sm:text-2xl">
            Exercise not only changes your body.
            <br />
            It changes your mind, your attitude, and your mood.
          </p>
        </div>

        {/* ========== exercise list ======== */}
        <div className="flex flex-col gap-8 px-12 py-20 bg-indigo-600 sm:flex-row sm:justify-between rounded-xl">
          <div
            className="flex flex-col items-center justify-center gap-4"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="p-4 rounded-xl bg-indigo-50">
              <img src={yoga} className="w-10 h-10" alt="" />
            </span>

            <div className="text-center text-white">
              <h4>Mind</h4>
              <p>Exercise transforms not just your body, but also your mind.</p>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center gap-4"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="p-4 rounded-xl bg-indigo-50">
              <img src={lunges} className="w-10 h-10" alt="" />
            </span>

            <div className="text-center text-white">
              <h4>Body</h4>
              <p>
                Exercise is the key to unlocking a positive and energized mind.
              </p>
            </div>
          </div>

          <div
            className="flex flex-col items-center justify-center gap-4"
            data-aos="zoom-in"
            data-aos-duration="1500"
          >
            <span className="p-4 rounded-xl bg-indigo-50">
              <img src={leader} className="w-10 h-10" alt="" />
            </span>

            <div className="text-center text-white">
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
