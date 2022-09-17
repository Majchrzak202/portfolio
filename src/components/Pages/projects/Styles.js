import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      minHeight: "100%",
    },
  },
  title: {
    fontSize: "40px",
    fontStyle: "Open Sans",
    fontWeight: 700,
    paddingBottom: "25px",
    paddingTop: "35px",
    width: "90%",
    textAlign: "center",
  },
}));

export default useStyles;
