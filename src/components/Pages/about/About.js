import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import useStyles from "./Styles";
import Runner from "./../../../assets/Runner.png";
import Blockchain from "./../../../assets/Blockchain.png";
import Croatia from "./../../../assets/Croatia.png";
import Skyrim from "./../../../assets/Skyrim.png";
import { motion } from "framer-motion";
import MainPhoto from "./../../../assets/MainPhoto.png";
import Github from "../../github-calendar/Github";
import MyStrength from "../../my-strength/MyStrength";
import { useTheme } from "../../context/ThemeContextProvider";

const About = () => {
  const classes = useStyles();
  const {theme} = useTheme()
  return (
    <motion.div transition={{ duration: 0.5 }} animate={{ y: -100 }}>
      <Box
        transition={{ duration: 0.5 }}
        animate={{ y: -100 }}
        className={classes.main}
      >
        <Grid className={classes.container} container>
          <Grid xs={12} sm={12} md={6} lg={6} item>
            <motion.div transition={{ duration: 0.5 }} animate={{ y: -80 }}>
              <Box className={classes.typography}>
                <h1 className={classes.title}>
                  Nice to meet you, <br></br> I'm Marcin Łuba
                </h1>
                <Typography
                  style={{
                    fontSize: "15px",
                    marginLeft: "20px",
                    fontWeight: 800,
                    fontStyle: "Open Sans",
                    textAlign: "left",
                    maxWidth: "70%",
                    paddingTop: "5px",
                  }}
                >
                  I'm 29 self learned Junior React Developer from Poland. I'm
                  fascinated with the web and I want to take this journey step
                  by step to gain new knowledge and tech skills. I never thought
                  i would love programming It feels like a pure magic to develop
                  something from scrath!
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} item>
            <motion.div transition={{ duration: 0.9 }} animate={{ y: -50 }}>
              <Box className={classes.photoBox}>
                <img
                id={theme}
                  className={classes.image}
                  src={MainPhoto}
                  alt="AboutPhoto"
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>
        <MyStrength />
        <Github />
        <motion.div transition={{ duration: 1.5 }} animate={{ y: -100 }}>
          <Box
            transition={{ duration: 1.5 }}
            animate={{ y: -100 }}
            className={classes.hobbies}
          >
            <Grid
              style={{ marginTop: "20px", padding: "30px" }}
              spacing={3}
              container
            >
              <Grid
                style={{ textAlign: "center" }}
                xs={12}
                sm={12}
                md={12}
                lg={12}
                item
              >
                <Typography
                  style={{
                    fontSize: "25px",
                    marginLeft: "20px",
                    fontWeight: 800,
                    fontStyle: "Open Sans",
                    textAlign: "center",
                  }}
                >
                  What i love to do:
                </Typography>
              </Grid>
              <Grid
                className={classes.hobbieGrid}
                xs={12}
                sm={3}
                md={3}
                lg={3}
                item
              >
                <Box className={classes.hobbieBox}>
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={Runner}
                    alt="runner"
                  />
                </Box>
                Running
              </Grid>
              <Grid
                className={classes.hobbieGrid}
                xs={12}
                sm={3}
                md={3}
                lg={3}
                item
              >
                <Box className={classes.hobbieBox}>
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={Blockchain}
                    alt="blockchain"
                  />
                </Box>
                Blockchain
              </Grid>
              <Grid
                className={classes.hobbieGrid}
                xs={12}
                sm={3}
                md={3}
                lg={3}
                item
              >
                <Box className={classes.hobbieBox}>
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={Croatia}
                    alt="Croatia"
                  />
                </Box>
                Croatia
              </Grid>
              <Grid
                className={classes.hobbieGrid}
                xs={12}
                sm={3}
                md={3}
                lg={3}
                item
              >
                <Box className={classes.hobbieBox}>
                  <img
                    style={{ width: "80px", height: "50px" }}
                    src={Skyrim}
                    alt="Skyrim"
                  />
                </Box>
                Skyrim
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default About;
