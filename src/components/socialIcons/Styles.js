import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  socialIcons: {
    "& #Light": {
      /* fill: "white", */
      backgroundColor: "rgba(251, 251, 251, 0);",
      color: 'white'
    },
    "& #Dark": {
      fill: "white",
      backgroundColor: "rgba(31, 31, 31, 0)",
    },
  },
});

export default useStyles;
