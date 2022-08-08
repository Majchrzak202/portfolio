import React from "react";
import { PROJECTS } from "../consts/projectList";
import { useParams } from "react-router-dom";
import "./ProjectPage.css";
const ProjectPage = () => {
  const { id } = useParams();

  const title = PROJECTS[id - 1].title;
  const img = PROJECTS[id - 1].img;
  const longDescritption = PROJECTS[id - 1].longDescritption;
  const demoLink = PROJECTS[id - 1].links.site;
  const repoLink = PROJECTS[id - 1].links.repo;

  console.log(longDescritption)

  return (
    <div className="projectpage">
      <h2>{title}</h2>
      <img alt={id} src={img} />
      <p>{longDescritption}</p>
      <div className="project-buttons">
        <button>
          <a href={repoLink}>REPO</a>
        </button>
        <button>
          <a href={demoLink}>DEMO</a>
        </button>
      </div>
    </div>
  );
};

export default ProjectPage;
