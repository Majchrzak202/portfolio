import React from "react";
import { Grid } from "@material-ui/core";
import { PROJECTS } from "../consts/projectList";
import ProjectCard from "./project-card/ProjectCard";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "5px",
    [theme.breakpoints.up(1800)]: {
      width: "85%",
      height: "50vh",
    },
  },
}));

const ProjectList = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      justifyContent="center"
      spacing={2}
      className={classes.container}
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

export default React.memo(ProjectList);
