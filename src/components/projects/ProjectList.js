import React from "react";
import { Grid } from "@material-ui/core";
import { PROJECTS } from "../consts/projectList";
import ProjectCard from "./ProjectCard/ProjectCard";
import { Link } from "react-router-dom";

const ProjectList = () => {
  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
       style={{ padding: "5px" }}
    >
      {PROJECTS.map((project) => (
        <Grid key={project.id} item xs={12} sm={4} md={4} lg={4} xl={4}>
          <Link to={`/project/${project.id}`}>
            <ProjectCard
              id={project.id}
              name={project.title}
              descritpion={project.descritpion}
              img={project.img}
              imgalt={project.id}
              demolink={project.links.site}
              repoLink={project.links.repo}
            />
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectList;
