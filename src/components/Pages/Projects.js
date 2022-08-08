import React from "react";
import "./Projects.css";
import ProjectList from "../projects/ProjectList";


const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container"></div>
      <div>
        <h2>These are my recent Works!</h2>
      </div>
      <ProjectList />
    </div>
  );
};

export default Projects;
