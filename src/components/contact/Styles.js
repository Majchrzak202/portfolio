import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "flex-start",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "30px",
      alignItems: "center",
    },
  },
  box: {
    width: "auto",
    marginLeft: "30px",
    padding: "20px",
    borderRadius: "99%",
    cursor: "pointer",
    [theme.breakpoints.down("sm")]: {
      margin: "5px",
    },
  },

  title: {
    fontSize: "20px",
    marginLeft: "0px",
    fontWeight: 800,
    fontStyle: "Open Sans",

    marginTop: "30px",
    display: "flex",
    [theme.breakpoints.up(970)]: {
      marginLeft: "20px",
    },
    [theme.breakpoints.down(970)]: {
      marginRight: "60px",
    },
    [theme.breakpoints.down(620)]: {
      marginRight: "20px",
    },
  },
  muiIcon: { fontSize: "40px", color: "white" },
}));

export default useStyles;
