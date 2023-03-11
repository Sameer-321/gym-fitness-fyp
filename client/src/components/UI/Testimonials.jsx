import React from "react";
import "../../styles/testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";
import bikash from "../../assets/img/bikash.png";
import umanga from "../../assets/img/umanga.png";
import dhaps from "../../assets/img/dhaps.png";


export default function Testimonial() {
  return (
    <>
      <section>
        <div className="container sliders">
          <h2 className="section__title">Testimonials</h2>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-01">
                  <img src={bikash} alt="" />
                </div>

                <h4>Siddhant Chaudary</h4>
                <p>
                I recently joined this gym and I have to say that it's one of the best decisions 
                I've made for my fitness journey. The gym has state-of-the-art equipment and knowledgeable 
                trainers who help me achieve my fitness goals. The atmosphere is welcoming, and I've made many friends 
                here who share the same passion for fitness.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-02">
                  <img src={umanga} alt="" />
                </div>

                <h4>Umanga Kumar Shrestha</h4>
                <p>
                What sets this gym apart from others is the community it fosters. The trainers don't just guide
                 me through my workouts, but they also provide valuable nutrition and lifestyle advice. 
                 They genuinely care about my progress and are always available to answer my questions. The gym also offers a variety of classes and programs that keep my workouts 
                interesting and challenging.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="slide__item">
                <div className="slide__img-03">
                  <img src={dhaps} alt="" />
                </div>

                <h4>Rashman Shrestha</h4>
                <p>
                I would highly recommend this gym to anyone who is looking for a supportive and motivating 
                environment to achieve their fitness goals. The gym has everything you need to take your fitness
                 journey to the next level, including an outdoor workout area, a sauna, and a smoothie bar. Joining
                  this gym has been a game-changer for me, and I look forward to continuing my
                 fitness journey with the help of its fantastic trainers and community.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}
