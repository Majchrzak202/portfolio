import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "80vh",
    minWidth: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginTop: "50px",
    [theme.breakpoints.up(1800)]: {
      minHeight: "60vh",
    },
  },
  container: {
    height: "80%",
    width: "100%",
    marginTop: "100px",
    "& #Light": {
      backgroundColor: "rgba(98, 0, 238, 255)",
    },
    "& #Dark": {
      backgroundColor: "rgba(40,48,62,255)",
    },
    [theme.breakpoints.up(1200)]: {
      width: "95%",
    },
    [theme.breakpoints.up(1800)]: {
      width: "85%",
      height: "60%",
    },
    [theme.breakpoints.up(2000)]: {
      width: "75%",
    },
    [theme.breakpoints.up(2200)]: {
      width: "68%",
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
    alignItems: "flex-start",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },
  card: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "30%",
    flexDirection: "column",
    width: "90%",
    border: "none",
    boxShadow: "none",
    paddingLeft: "30px",
    [theme.breakpoints.down("xs")]: {
      height: "30%",
      paddingLeft: "10px",
    },
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
    },
  },

  title: {
    fontSize: "40px",
    marginLeft: "20px",
    fontWeight: 800,
    fontStyle: "Open Sans",
    textAlign: "left",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      textAlgin: "center",
      fontSize: "10px",
    },
  },

  typeAnimation: {
    fontSize: "40px",
    fontStyle: "Open Sans",
    fontWeight: 700,
    marginLeft: "16px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
    },
  },

  imageGrid: {
    display: "flex",
    justifyContent: "center",
    alignItem: "center",
  },

  mainImage: {
    width: "400px",
    height: "400px",
    borderRadius: "99%",
    backgroundColor: "rgba(40,48,62,255)",
    marginTop: "30px",
    marginLeft: "50px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "50px",
      width: "300px",
      height: "300px",
    },
  },

  waveingHand: {
    paddingLeft: "10px",
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
}));

export default useStyles;
