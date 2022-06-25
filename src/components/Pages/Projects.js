import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container"></div>
      <ul>
        <li>
          <div className="project">
            <img />
            <h3></h3>
            <div className="project-buttons">
              <button>CODE</button>
              <button>DEMO</button>
            </div>
          </div>
        </li>
        <li>
             <div className="project">
            <img />
            <h3></h3>
            <div className="project-buttons">
              <button>CODE</button>
              <button>DEMO</button>
            </div>
          </div>
        </li>
        <li>
          <div className="project">
            <img />
            <h3></h3>
            <div className="project-buttons">
              <button>CODE</button>
              <button>DEMO</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
