import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Pages/Home";
import Footer from "./components/footer/Footer";
import Resume from "./components/Pages/Resume";
import Projects from "./components/Pages/Projects";
import About from "./components/Pages/About";

import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
