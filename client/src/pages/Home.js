import React from "react";
import Exercises from "../components/UI/Exercises";
import Start from "../components/UI/Start";
import Pricing from "../components/UI/Pricing";
import Testimonials from "../components/UI/Testimonials";
import VideoRender from "../components/Video/VideoRender";

export default function Home(userInfo) {
  return (
    <>
      <VideoRender />

      <Exercises />
      <Start />
      <Pricing />
      <Testimonials />
    </>
  );
}
