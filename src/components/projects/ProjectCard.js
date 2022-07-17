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
      </div>
    </li>
  );
};

export default ProjectCard;
