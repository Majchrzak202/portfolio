import React, { lazy, Suspense } from "react";
import Navbar from "./components/navbar/Navbar";
import Main from "./components/Pages/Main";
import Footer from "./components/footer/Footer";
import "./App.css";

import { Route } from "react-router-dom";
import CustomRoutes from "./../src/components/Pages/CustomRoutes";
import LoadingSpinner from "./components/loading-spinner/LoadingSpinner";

import { useTheme } from "./components/context/ThemeContextProvider";
import ScrollToTop from "./components/scroll-to-top/ScrollToTop";

const ProjectPage = lazy(() =>
  import("./components/projects/project-page/ProjectPage")
);

const App = () => {
  const { theme } = useTheme();

  return (
    <div className="App" id={theme}>
      <Navbar />
      <ScrollToTop />
      <Suspense fallback={<LoadingSpinner />}>
        <CustomRoutes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/project/:id" element={<ProjectPage />}></Route>
        </CustomRoutes>
      </Suspense>
      <Footer />
    </div>
  );
};

export default App;
