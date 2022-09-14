import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  resume: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "150px",
    paddingBottom: "30px",
    "& #Light": {
      backgroundColor: "rgba(98, 0, 238, 255)",
      color: "white",
      textDecoration: "none",
    },
    "& #Dark": {
      backgroundColor: "rgba(40,48,62,255)",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
    },
  },
}));

export default useStyles;
