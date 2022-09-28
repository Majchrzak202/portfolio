import React from "react";
import { PROJECTS } from "../../consts/projectList";
import { useParams } from "react-router-dom";
import { Button, Box, Typography } from "@material-ui/core";
import { useTheme } from "../../context/ThemeContextProvider";
import useStyles from "./Styles";

const ProjectPage = () => {
  const { id } = useParams();
  const classes = useStyles();
  const { theme } = useTheme();

  const title = PROJECTS[id - 1].title;
  const img = PROJECTS[id - 1].img;
  const longDescritption = PROJECTS[id - 1].longDescritption;
  const demoLink = PROJECTS[id - 1].links.site;
  const repoLink = PROJECTS[id - 1].links.repo;

  return (
    <Box className={classes.main}>
      <Box className={classes.box}>
        <img className={classes.img} src={img} alt={title} />
        <Typography className={classes.title}>{title}</Typography>
        <Typography className={classes.description}>
          {longDescritption}
        </Typography>
        <Box className={classes.buttonBox}>
          <Button
            id={theme}
            href={repoLink}
            target="_blank"
            className={classes.button}
            variant="contained"
          >
            Github Repo
          </Button>
          <Button
            id={theme}
            href={demoLink}
            target="_blank"
            className={classes.button}
            variant="contained"
          >
            Demo of Site
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ProjectPage;
