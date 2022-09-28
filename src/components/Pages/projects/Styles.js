import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    height: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    padding: 40,
    backgroundColor: 'rgba(40,48,62,255)',
    paddingBottom: 100,
    [theme.breakpoints.down(600)]: {
      marginTop: '350px'
    },
    [theme.breakpoints.down(450)]: {
      marginTop: '100px',
      padding: 20
    },
    [theme.breakpoints.up(1800)]: {
      height: "auto",
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
    backgroundColor: 'rgba(40,48,62,255)',
    color: 'white'
  },
}));

export default useStyles;
