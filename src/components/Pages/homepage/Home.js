import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import MainPhoto from "./../../../assets/MainPhoto.png";
import { motion } from "framer-motion";
import useStyles from "./Styles";
import { useTheme } from "../../context/ThemeContextProvider";
import { TypeAnimation } from "react-type-animation";
import SocialIcons from "../../socialIcons/SocialIcons";
import Github from "../../github-calendar/Github";

const Home = () => {
  const classes = useStyles();
  const { theme } = useTheme();
  return (
    <div className={classes.main}>
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
            <motion.div transition={{ duration: 0.5 }} animate={{ y: -30 }}>
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
                Hi there
                <motion.div
                  style={{
                    paddingLeft: "10px",
                  }}
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
                  "ServiceNow Consultant",
                  2000, // Waits 2s
                  "Self learner", //
                  2000,
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className={classes.typeAnimation}
              />
              <h1
                style={{
                  fontSize: "20px",
                  marginLeft: "20px",
                  fontWeight: 800,
                  fontStyle: "Open Sans",
                  textAlign: "left",
                  marginTop: "30px",
                }}
              >
                Feel free to Conect with me:
              </h1>
            </motion.div>
            <Box id={theme}  className={classes.socialBox}>
              <SocialIcons />
            </Box>
          </Box>
        </Grid>
        <Grid
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          xs={12}
          sm={12}
          md={5}
          lg={5}
          xl={4}
          xxl={4}
          item
        >
          <motion.div
            transition={{ duration: 0.5 }}
            animate={{ y: -40, x: -30 }}
          >
            <img id={theme} className={classes.mainImage} src={MainPhoto} alt="Main" />
          </motion.div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
