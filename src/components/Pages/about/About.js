import React from "react";
import { Box, Typography } from "@material-ui/core";
import useStyles from "./Styles";
import { motion } from "framer-motion";
import { useTheme } from "../../context/ThemeContextProvider";
import CoolTimeline from "../../timeline/Timeline";
import { useInView } from "react-intersection-observer";
import { Link as SmoothLink } from "react-scroll";

const About = () => {
  const classes = useStyles();
  const { theme } = useTheme();
  const [ref, inView] = useInView();
  return (
    <div className={classes.about} id="about">
      <Box ref={ref} id={theme} className={classes.main}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : ""}
          transition={{ duration: 1 }}
        >
          <Typography style={{fontSize: 30}} className={classes.title}>
            Opowiem Wam moją historię ...
          </Typography>
        </motion.div>
        <CoolTimeline />
        <Box className={classes.box}>
          <Typography style={{ color: "white" }}>
            Jestem graczem zespołowym, nastawionym na otwartą komunikację,
            pozytywne wibracje i ciekawych ludzi. Chętnie wprowadzę trochę
            pozytywnej energii i czarnego humoru do Waszego zespołu. Koniecznie
            sprawdzcie moje{" "}
            <SmoothLink
              to="projects"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className={classes.link}
              id={theme}
            >
              Projekty
            </SmoothLink>{" "}
            ,a takze{" "}
            <a
              id={theme}
              href="https://github.com/Majchrzak202"
              className={classes.link}
            >
              Github'a
            </a>{" "}
            oraz{" "}
            <a
              id={theme}
              href="https://www.linkedin.com/in/marcinluba/"
              className={classes.link}
            >
              LinkedIn'a
            </a>
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default React.memo(About);
