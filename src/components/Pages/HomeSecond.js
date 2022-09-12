import React from "react";
import { Grid, Typography, CardMedia, Card } from "@material-ui/core";
import MainPhoto from "./../../assets/MainPhoto.png";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "../context/ThemeContextProvider";
import { TypeAnimation } from "react-type-animation";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "80vh",
    minWidth: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  container: {
    height: "80%",
    width: "100%",
    marginTop: "100px",
    "& #Light": {
      backgroundColor: "rgb(242, 244, 246)",
    },
    "& #Dark": {
      backgroundColor: "black",
    },
  },
  motionDiv: {
    marginBottom: "30px",
    marginLeft: "20px",
    width: "60vw",
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
    },
  },
  item: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%",
    flexDirection: "column",
    width: "100vw",
    border: "none",
    boxShadow: "none",
    paddingLeft: "30px",
  },

  title: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingBottom: "10px",
    fontSize: "60px",
    marginLeft: "20px",
    fontWeight: 800,
    fontStyle: "Open Sans",
    textAlign: "left",
  },

  typeAnimation: {
    fontSize: "40px",
    fontStyle: "Open Sans",
    fontWeight: 700,
    marginLeft: "15px",
  },
}));

const HomeSecond = () => {
  const classes = useStyles();
  const { theme } = useTheme();
  return (
    <div className={classes.main}>
      <Grid id={theme} className={classes.container} container>
        <Grid
          id={theme}
          className={classes.item}
          xs={12}
          sm={12}
          md={7}
          lg={7}
          xl={8}
          xxl={8}
          item
        >
          <Card id={theme} className={classes.card}>
            <motion.div transition={{ duration: 0.5 }} animate={{ y: -60 }}>
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
                  style={{ paddingLeft: "10px" }}
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
              <button style={{ margin: "50px" }}>
                Feel free to Conect with me!
              </button>
            </motion.div>
          </Card>
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
          <Card className={classes.imgCard} id={theme}>
            <CardMedia className={classes.cardMedia}>
              <img
                className={classes.img}
                style={{ height: "auto", width: "auto", padding: 'auto' }}
                src={MainPhoto}
                alt="123"
              />
            </CardMedia>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomeSecond;
