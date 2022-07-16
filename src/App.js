import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Pages/Home";
import Footer from "./components/footer/Footer";
import Resume from "./components/Pages/Resume";
import Projects from "./components/Pages/Projects";
import About from "./components/Pages/About";
import NewNabra from "./components/navbar/NewNabra";

import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useTheme } from "./components/context/ThemeContextProvider";
import ProjectPage from "./components/projects/ProjectPage";

const App = () => {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div className="App" id={theme}>
      <NewNabra/>
      <div className="switch"></div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/project/:id" element={<ProjectPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
