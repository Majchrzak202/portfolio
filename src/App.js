import React, { lazy, Suspense } from "react";

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import HomeSecond from "./components/Pages/HomeSecond";

import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useTheme } from "./components/context/ThemeContextProvider";
import ProjectPage from "./components/projects/ProjectPage";

const Home = lazy(() => import("./components/Pages/Home"));
const About = lazy(() => import("./components/Pages/About"))
const Projects = lazy(() => import("./components/Pages/Projects"))
const Resume = lazy(() => import("./components/Pages/Resume"))

const App = () => {
  const { theme } = useTheme();

  return (
    <div className="App" id={theme}>
      <Navbar />
      <Suspense fallback={<LoadingSpinner/>}>
        <Routes>
          
          <Route path="/" element={<HomeSecond />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/project/:id" element={<ProjectPage />}></Route>
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
