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
    [theme.breakpoints.down("xs")]: {
      height: "300px",
      paddingLeft: "10px",
    },
    [theme.breakpoints.only("sm")]: {
      alignItems: "center",
    },
  },

  title: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    paddingBottom: "10px",
    [theme.breakpoints.down("xs")]: {
      textAlgin: "center",
    },
  },

  typeAnimation: {
    fontSize: "40px",
    fontStyle: "Open Sans",
    fontWeight: 700,
    marginLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "26px",
    },
  },

  mainImage: {
    width: "400px",
    height: "400px",
    borderRadius: "99%",
    backgroundColor: "rgba(40,48,62,255)",
    marginTop: "30px",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "60px",
      width: "300px",
      height: "300px",
    },
  },

  socialBox: {
    width: "auto",
    marginLeft: "30px",
    padding: "5px",
    marginBottom: "30px",
    borderRadius: '8px',
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0px",
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "40px",
    },
  },
}));

export default useStyles;
