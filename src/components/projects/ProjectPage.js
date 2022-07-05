import React from "react";
import { PROJECTS } from "../consts/projectList";
import { useParams } from "react-router-dom";

const ProjectPage = () => {
  const { id } = useParams();

  const title = PROJECTS[id - 1].title;
  const descritpion = PROJECTS[id - 1].descritpion;
  const img = PROJECTS[id - 1].img;

  return <div>
    <div><h2>{title}</h2></div>
    <div><p>{descritpion}</p></div>
    <div><img src={img}/></div>
  </div>;
};

export default ProjectPage;
