import React from "react";
import { Box } from "@material-ui/core";
import ProjectList from "../../projects/ProjectList";
import useStyles from "./Styles";

const Projects = () => {
  const classes = useStyles();
  return (
    <Box className={classes.main}>
      <Box style={{ marginTop: "50px" }}>
        <h1 className={classes.title}>These are my recent Works!</h1>
      </Box>
      <ProjectList />
    </Box>
  );
};

export default Projects;
