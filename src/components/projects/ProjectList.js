import React from "react";
import { Grid, Box } from "@material-ui/core";
import { PROJECTS } from "../consts/projectList";
import ProjectCard from "./ProjectCard/ProjectCard";
import { Link } from "react-router-dom";

const ProjectList = () => {
  return (
    <Box m={3} p={4}>
      <Grid container justifyContent="center" spacing={3}>
        {PROJECTS.map((project) => (
          <Grid  key={project.id} item xs={12} sm={6} md={4} lg={2}>
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
    </Box>
  );
};

export default ProjectList;
