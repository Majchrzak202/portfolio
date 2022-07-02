import React from "react";
import "./Projects.css";
import { PROJECTS } from "../consts/projectList";
import ProjectCard from "../projects/ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container"></div>
      <div>
        <h2>These are my recent Works!</h2>
      </div>
      <ul>
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.title}
            descritpion={project.descritpion}
            img={project.img}
            imgalt={project.id}
            demolink={project.links.site}
            repoLink={project.links.repo}
          >
            <Link to={`/project/${project.id}`} />
          </ProjectCard>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
