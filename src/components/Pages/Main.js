import React from "react";
import Home from "./../Pages/homepage/Home";
import About from "./../Pages/about/About";
import Projects from "./../Pages/projects/Projects";
import Resume from "./../Pages/resume/Resume";
import WhyMe from "../why-me/WhyMe";

const Main = () => {
  return (
    <>
      <Home />
      <About />
      <WhyMe />
      <Projects />
      <Resume />
    </>
  );
};

export default React.memo(Main);
