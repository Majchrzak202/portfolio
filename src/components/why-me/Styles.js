import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "100vh",
    marginTop: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100vw",
    [theme.breakpoints.up("xl")]: {
      height: "50vh",
    },
    [theme.breakpoints.down("md")]: {
      height: "50vh",
    },
    [theme.breakpoints.down("sm")]: {
      height: "70vh",
    },
    [theme.breakpoints.up("md")]: {
      height: "70vh",
      marginTop: 0,
    },
    "& #Light": {
      background: `linear-gradient(to right, #6200ee, #4900ee, #6200ee, #6200ee, #4900ee)`,
    },
    "& #Dark": {
      background: `linear-gradient(to right, #28303e, #282f3d, #222936, #1a1f28,#1a1f28)`,
    },
  },
  container: {
    width: "80vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.up("xl")]: {
      height: "50vh",
    },
  },
  gridItem: {
    width: "auto",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  motionDiv: {
    borderRadius: "50%",
    width: "15em",
    height: "15em",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    color: "white",
    [theme.breakpoints.down("sm")]: {
      margin: 5,
      width: "10em",
      height: "10em",
    },
  },

  box: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
  },
  counter: {
    color: "white",
    fontSize: 30,
    fontStyle: "Open Sans",
    fontWeight: 800,
  },
}));

export default useStyles;
