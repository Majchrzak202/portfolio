import React from "react";
import { motion } from "framer-motion";
import { Grid, Box } from "@material-ui/core";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useTheme } from "../context/ThemeContextProvider";
import useStyles from "./Styles";

const WhyMe = () => {
  const classes = useStyles();
  const [ref, inView] = useInView();
  const { theme } = useTheme();

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : ""}
        transition={{ duration: 0.5 }}
        className={classes.main}
      >
        <Grid container className={classes.container}>
          <Grid
            ref={ref}
            className={classes.gridItem}
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
          >
            <motion.div
              className={classes.motionDiv}
              id={theme}
              whileHover={{
                scale: [1, 1.1, 1.2, 1.1, 1],
                borderRadius: ["50%", "50%", "20%", "50%"],
              }}
              transition={{ duration: 1.7 }}
            >
              <Box className={classes.box}>
                <CountUp
                  className={classes.counter}
                  start={0}
                  end={305}
                  duration={2}
                  enableScrollSpy={true}
                  scrollSpyDelay={0.3}
                />
                <h1 style={{ fontSize: 15 }}>Kontrybucji Github</h1>
              </Box>
            </motion.div>
          </Grid>
          <Grid
            className={classes.gridItem}
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
            ref={ref}
          >
            <motion.div
              className={classes.motionDiv}
              id={theme}
              whileHover={{
                scale: [1, 1.1, 1.2, 1.1, 1],
                borderRadius: ["50%", "50%", "20%", "50%"],
              }}
              transition={{ duration: 1.7 }}
            >
              <Box className={classes.box}>
                <CountUp
                  className={classes.counter}
                  start={0}
                  end={1}
                  duration={2}
                  enableScrollSpy={true}
                  scrollSpyDelay={0.3}
                />
                <h1 style={{ fontSize: 25 }}>
                  Cel życiowy
                  <br />
                  <p style={{ fontSize: 5 }}>*Być Frontend Developerem</p>
                </h1>
              </Box>
            </motion.div>
          </Grid>
          <Grid
            className={classes.gridItem}
            item
            xs={12}
            sm={4}
            md={4}
            lg={4}
            xl={4}
          >
            <motion.div
              className={classes.motionDiv}
              id={theme}
              whileHover={{
                scale: [1, 1.1, 1.2, 1.1, 1],
                borderRadius: ["50%", "50%", "20%", "50%"],
              }}
              transition={{ duration: 1.7 }}
            >
              <Box className={classes.box}>
                <CountUp
                  className={classes.counter}
                  start={0}
                  end={28}
                  duration={2}
                  enableScrollSpy={true}
                  scrollSpyDelay={0.3}
                />
                <h1 style={{ fontSize: 15 }}>Tatuaży</h1>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </motion.div>
    </div>
  );
};

export default React.memo(WhyMe);
