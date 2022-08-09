import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  socialIcons: {
    "& #Light": {
      fill: 'black',
      backgroundColor:'none'
      
    },
    "& #Dark": {
      fill: "white",
      backgroundColor: "rgba(31, 31, 31, 255)",
    },
  },
});

export default useStyles;
