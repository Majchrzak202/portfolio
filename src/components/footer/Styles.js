import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    "& #Light": {
      backgroundColor: "rgba(98, 0, 238, 255)",
    },
    "& #Dark": {
      backgroundColor: "rgba(40,48,62,255)",
    },
  },
  footer: {
    display: "flex",
    minHeight: "10vh",
    width: "100vw",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    display: "flex",
    width: "100vw",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.up("xl")]: {
      width: "70vw",
    },
  },
  title: {
    color: "white",
    marginLeft: 10,
    [theme.breakpoints.down("xs")]: {
      fontSize: 10,
    },
  },
}));

export default useStyles;