import React from "react";
import { Box, Typography, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import AboutPhoto from "./../../assets/AboutPhoto.png";
import Runner from "./../../assets/Runner.png";
import Blockchain from "./../../assets/Blockchain.png";
import Croatia from "./../../assets/Croatia.png";
import Skyrim from "./../../assets/Skyrim.png";
import { motion } from "framer-motion";

const useStyles = makeStyles({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flexDirection: "column",
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <motion.div transition={{ duration: 0.5 }} animate={{ y: -100 }}>
      <Box
        transition={{ duration: 0.5 }}
        animate={{ y: -100 }}
        className={classes.main}
      >
        <Grid
          style={{
            marginTop: "200px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
          container
        >
          <Grid xs={12} sm={12} md={6} lg={6} item>
            <motion.div transition={{ duration: 0.5 }} animate={{ y: -80 }}>
              <Box style={{paddingLeft: '10px'}}>
                <Typography
                  style={{
                    fontSize: "60px",
                    marginLeft: "20px",
                    fontWeight: 800,
                    fontStyle: "Open Sans",
                    textAlign: "left",
                  }}
                >
                  Nice to meet you, <br></br> I'm Marcin Łuba
                </Typography>
                <Typography
                  style={{
                    fontSize: "15px",
                    marginLeft: "20px",
                    fontWeight: 800,
                    fontStyle: "Open Sans",
                    textAlign: "left",
                  }}
                >
                  I'm 29 self learned Junior React Developer from Poland. I'm
                  fascinated with the web and I want to take this journey step
                  by step to gain new knowledge and tech skills.<br></br> I
                  never thought i would love programming <br></br>
                  It feels like a pure magic to develop something from scrath!
                </Typography>
              </Box>
            </motion.div>
          </Grid>
          <Grid xs={12} sm={12} md={6} lg={6} item>
            <motion.div transition={{ duration: 0.9 }} animate={{ y: -50 }}>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: "400px",
                    height: "400px",
                    borderRadius: "99%",
                    backgroundColor: "rgba(40,48,62,255)",
                    marginTop: "15px",
                  }}
                  src={AboutPhoto}
                  alt="AboutPhoto"
                />
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <motion.div transition={{ duration: 1.5 }} animate={{ y: -100 }}>
          <Box
            transition={{ duration: 1.5 }}
            animate={{ y: -100 }}
            style={{
              padding: "50px",
              minHeight: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
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
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                xs={12}
                sm={12}
                md={3}
                lg={3}
                item
              >
                <Box
                  style={{
                    borderRadius: "100%",
                    backgroundColor: "rgba(242,244,246,255)",
                    padding: "10px",
                  }}
                >
                  <img style={{ width: "50px", height: "50px" }} src={Runner} />
                </Box>
                Running
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                xs={12}
                sm={12}
                md={3}
                lg={3}
                item
              >
                <Box
                  style={{
                    borderRadius: "100%",
                    backgroundColor: "rgba(242,244,246,255)",
                    padding: "10px",
                  }}
                >
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={Blockchain}
                  />
                </Box>
                Blockchain
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                xs={12}
                sm={12}
                md={3}
                lg={3}
                item
              >
                <Box
                  style={{
                    borderRadius: "100%",
                    backgroundColor: "rgba(242,244,246,255)",
                    padding: "10px",
                  }}
                >
                  <img
                    style={{ width: "50px", height: "50px" }}
                    src={Croatia}
                  />
                </Box>
                Croatia
              </Grid>
              <Grid
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                xs={12}
                sm={12}
                md={3}
                lg={3}
                item
              >
                <Box
                  style={{
                    borderRadius: "100%",
                    backgroundColor: "rgba(242,244,246,255)",
                    padding: "10px",
                  }}
                >
                  <img style={{ width: "70px", height: "50px" }} src={Skyrim} />
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
