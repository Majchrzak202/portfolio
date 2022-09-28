import React from "react";
import { Box } from "@material-ui/core";
import ProjectList from "../../projects/ProjectList";
import useStyles from "./Styles";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Projects = () => {
  const classes = useStyles();
  const [ref, inView] = useInView();

  return (
    <Box id="projects" className={classes.main}>
      <Box ref={ref} style={{ marginTop: "50px" }}>
        <motion.div
          style={{ backgroundColor: "rgba(40,48,62,255)" }}
          initial={{ x: "-100vw" }}
          animate={inView ? { x: 0 } : ""}
          transition={{ type: "spring", duration: 1.2 }}
        >
          <h1 className={classes.title}>To moje ostatnie projekty!</h1>
        </motion.div>
      </Box>
      <ProjectList />
    </Box>
  );
};

export default Projects;
