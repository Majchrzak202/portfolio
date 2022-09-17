import React, { lazy, Suspense } from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Pages/homepage/Home";
import Footer from "./components/footer/Footer";
import "./App.css";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";

import { Route } from "react-router-dom";
import CustomRoutes from './../src/components/Pages/CustomRoutes'

import { useTheme } from "./components/context/ThemeContextProvider";

const About = lazy(() => import("./components/Pages/about/About"));
const Projects = lazy(() => import("./components/Pages/projects/Projects"));
const Resume = lazy(() => import("./components/Pages/resume/Resume"));
const ProjectPage = lazy(() => import("./components/projects/ProjectPage"));

const App = () => {
  const { theme } = useTheme();

  return (
    <div className="App" id={theme}>
      <Navbar />
      <Suspense fallback={<LoadingSpinner />}>
        <CustomRoutes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/resume" element={<Resume />}></Route>
          <Route path="/project/:id" element={<ProjectPage />}></Route>
        </CustomRoutes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
