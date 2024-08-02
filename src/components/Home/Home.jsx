import React from "react";
import BackgroundVideo from "../Background/BackgroundVideo";
import About from "../About/About";
import Brands from "../Brands/Brands";
import Projects from "../Projects/Projects";
import Testimonial from "../Testimonial1/Testimonial1";
import Testimonial2 from "../Testimonial2/Testimonial2";
import Contact from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <BackgroundVideo />
      <About />
      <Brands />
      <Projects />
      <Testimonial />
      <Testimonial2 />
      <Contact />
    </>
  );
};

export default Home;
