import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  socialIcons: {
    "& #Light": {
      fill: 'black',
      backgroundColor:'rgba(251, 251, 251, 0);',
      
      
    },
    "& #Dark": {
      fill: "white",
      backgroundColor: "rgba(31, 31, 31, 0)",
    },
  },
});

export default useStyles;
