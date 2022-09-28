import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  about: {
    "& #Light": {
      backgroundColor: "rgba(40,48,62,255)",
    },
    "& #Dark": {
      backgroundColor: "rgba(40,48,62,255)",
      color: "rgba(98, 0, 238, 255)",
    },
  },
  main: {
    heigth: "100%",
    padding: "80px",
  },

  title: {
    fontSize: "40px",
    color: "white",
    textAlign: "center",
    paddingBottom: "80px",
  },

  box: {
    width: "70vw",
    paddingTop: 50,
  },

  link: {
    color: "rgba(98, 0, 238, 255)",
    cursor: "pointer",
    fontWeight: 800,
  },
}));

export default useStyles;
