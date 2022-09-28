import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: 50,
    maxWidth: "100vw",
    "& #Light": {
      backgroundColor: "rgba(98, 0, 238, 255)",
    },
    "& #Dark": {
      backgroundColor: "rgba(40,48,62,255)",
    },
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100vw",
    [theme.breakpoints.down("sm")]: {
      width: "95vw",
      padding: 0,
    },
  },
  img: {
    width: "60%",
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
    },
  },
  title: {
    fontSize: 20,
    fontWeight: 800,
    padding: 20,
  },
  description: {
    fontSize: 15,
    textAlign: "justify",
    width: "60vw",
    [theme.breakpoints.down("sm")]: {
      width: "80vw",
      textAlign: "left",
    },
  },
  buttonBox: {
    padding: 40,
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "space-between",
      width: "80vw",
    },
  },
  button: {
    backgroundColor: "rgba(98, 0, 238, 255)",
    color: "white",
    padding: 5,
    marginRight: 10,
  },
}));

export default useStyles;
