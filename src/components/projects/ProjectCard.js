import React from "react";
import "./ProjectCard.css";


const ProjectCard = ({
  name,
  descritpion,
  img,
  repoLink,
  demoLink,
  imgalt,
}) => {
  return (
    <li>
      <div className="project">
        <img src={img} alt={imgalt} />
        <h3>{name}</h3>
        <p>{descritpion}</p>
        <div className="project-buttons">
         {/*  <button>
            <a href={repoLink}>REPO</a>
          </button>
          <button>
            <a href={demoLink}>DEMO</a>
          </button> */}
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
