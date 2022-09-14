import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flexDirection: "column",
  },
  container: {
    marginTop: "200px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      marginTop: "250px",
      minHeight: "100%",
    },
  },
  typography: {
    paddingLeft: "10px",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1px",
      alignItems: "center",
    },
  },
  title: {
    fontSize: "50px",
    marginLeft: "20px",
    fontWeight: 800,
    fontStyle: "Open Sans",
    textAlign: "left",
    [theme.breakpoints.down("sm")]: {
      fontSize: "25px",
    },
  },
  photoBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "400px",
    height: "400px",
    borderRadius: "99%",
    backgroundColor: "rgba(40,48,62,255)",
    marginTop: "15px",
    [theme.breakpoints.down("xs")]: {
      width: "300px",
      height: "300px",
    },
  },
  hobbies: {
    padding: "50px",
    minHeight: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  hobbieBox: {
    borderRadius: "100%",
    backgroundColor: "rgba(242,244,246,255)",
    padding: "10px",
  },
  hobbieGrid: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default useStyles;
