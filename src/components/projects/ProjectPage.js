import React from "react";
import { PROJECTS } from "../consts/projectList";
import { useParams } from "react-router-dom";
import "./ProjectPage.css";
import { Button } from "@material-ui/core";
import { useTheme } from "../context/ThemeContextProvider";
const ProjectPage = () => {
  const { id } = useParams();
  const { theme } = useTheme();

  const title = PROJECTS[id - 1].title;
  const img = PROJECTS[id - 1].img;
  const longDescritption = PROJECTS[id - 1].longDescritption;
  const demoLink = PROJECTS[id - 1].links.site;
  const repoLink = PROJECTS[id - 1].links.repo;

  return (
    <div className="projectpage">
      <h2>{title}</h2>
      <img alt={id} src={img} />
      <p>{longDescritption}</p>
      <div className="project-buttons">
        <Button
          style={{ backgroundColor: "rgba(40,48,62,255)", color: "white" }}
          size="medium"
          variant="contained"
          href={repoLink}
        >
          REPO
        </Button>

        <Button
          style={{ backgroundColor: "rgba(40,48,62,255)", color: "white" }}
          size="medium"
          variant="contained"
          href={demoLink}
        >
          DEMO
        </Button>
      </div>
    </div>
  );
};

export default ProjectPage;
