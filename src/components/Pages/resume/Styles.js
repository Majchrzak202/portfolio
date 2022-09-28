import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  resume: {
    display: "flex",
    flexDirection: "column",
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "150px",
    paddingBottom: "30px",
    "& #Light": {
      backgroundColor: "rgba(98, 0, 238, 255)",
      textDecoration: "none",
    },
    "& #Dark": {
      backgroundColor: "rgba(40,48,62,255)",
      color: "white",
    },
    [theme.breakpoints.down("xs")]: {
      height: "auto",
      paddingTop: 50,
    },
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  button: {
    textDecoration: "none",
    marginBottom: "30px",
    color: "white",
  },
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export default useStyles;
