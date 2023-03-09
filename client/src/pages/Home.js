import React from "react";
import Hero from "../components/UI/Hero";
import Exercises from "../components/UI/Exercises";
import Start from "../components/UI/Start";
import Pricing from "../components/UI/Pricing";
import Testimonials from "../components/UI/Testimonials";
import Footer from "../components/UI/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Exercises />
      <Start />
      <Pricing />
      <Testimonials />
      
    </>
  );
}
