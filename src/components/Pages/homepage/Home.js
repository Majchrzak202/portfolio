import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import MainPhoto from "./../../../assets/MainPhoto.png";
import { motion } from "framer-motion";
import useStyles from "./Styles";
import { useTheme } from "../../context/ThemeContextProvider";
import { TypeAnimation } from "react-type-animation";
import ContactBox from "../../contact/ContactBox";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const classes = useStyles();
  const { theme } = useTheme();
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={classes.main} id="home">
      <Grid className={classes.container} container>
        <Grid
          className={classes.item}
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={8}
          xxl={8}
          item
        >
          <Box className={classes.card}>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              animate={inView ? { y: -30, opacity: 1 } : ""}
            >
              <Typography
                className={classes.title}
                style={{
                  fontSize: "40px",
                  marginLeft: "20px",
                  fontWeight: 800,
                  fontStyle: "Open Sans",
                  textAlign: "left",
                }}
                variant="h1"
              >
                Nice to meet you,
                <motion.div
                  className={classes.waveingHand}
                  animate={{ rotate: -20 }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "reverse",
                    repeatDelay: 0.7,
                    from: 1,
                    duration: 1,
                    ease: "easeInOut",
                    type: "tween",
                  }}
                >
                  👋
                </motion.div>
              </Typography>
              <Typography
                className={classes.title}
                style={{
                  fontSize: "40px",
                  marginLeft: "20px",
                  fontWeight: 800,
                  fontStyle: "Open Sans",
                  textAlign: "left",
                }}
                variant="h1"
              >
                I'm Marcin Łuba
              </Typography>

              <TypeAnimation
                sequence={[
                  "Junior React Developer",
                  2000, // Waits 1s
                  "Self learner",
                  2000, // Waits 2s
                  "Man with a mission", //
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className={classes.typeAnimation}
              />
            </motion.div>
          </Box>
          <ContactBox />
        </Grid>
        <Grid
          className={classes.imageGrid}
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={4}
          xxl={4}
          item
        >
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            animate={inView ? { y: -40, x: -30, opacity: 1 } : ""}
          >
            <img
              id={theme}
              className={classes.mainImage}
              src={MainPhoto}
              alt="Main"
            />
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
