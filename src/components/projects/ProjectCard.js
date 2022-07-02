import React from "react";
import "./ProjectCard.css";
import { Link } from "react-router-dom";

const ProjectCard = ({
  name,
  descritpion,
  img,
  repoLink,
  demoLink,
  imgalt,
  id,
}) => {
  return (
    <li>
      <div className="project">
        <Link to={`/project/${id}`}>
          <img src={img} alt={imgalt} />
          </Link>
          <h3>{name}</h3>
          <p>{descritpion}</p>
        
        <div className="project-buttons">
          <button>
            <a href={repoLink}>REPO</a>
          </button>
          <button>
            <a href={demoLink}>DEMO</a>
          </button>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
