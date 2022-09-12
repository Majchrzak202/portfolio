import React from "react";
import { Typography, Box } from "@material-ui/core";
import ProjectList from "../projects/ProjectList";

const NewProjects = () => {
  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        style={{
          fontSize: "40px",
          fontStyle: "Open Sans",
          fontWeight: 700,
          paddingBottom: "25px",
          paddingTop: '35px'
        }}
        variant="h1"
      >
        These are my recent Works!{" "}
      </Typography>
      <ProjectList />
    </Box>
  );
};

export default NewProjects;
