import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appbar: {
    "& #Light": {
      backgroundColor: "rgba(98, 0, 238, 255)",
    },
    "& #Dark": {
      backgroundColor: "rgba(31, 31, 31, 255)",
    },
  },
  toolbar: {
    "& #Light": {
      color: "white",
      backgroundColor: "rgba(98, 0, 238, 255)"
    },
    "& #Dark": {
      color: "white",
      backgroundColor: "rgba(31, 31, 31, 255)",
    },
    display: "flex",
    justifyContent: "space-between",
   
  },
  grow: {
    flexGrow: 1,
  },

  
  mobilemenu: {
    "& #Light": {
      color: "black",
      backgroundColor: 'white',
      textDecoration: 'none' 
      
      
    },
    "& #Dark": {
      color: 'black',
      backgroundColor: 'white',
      textDecoration: 'none'
    },
  }
  
});

export default useStyles;
