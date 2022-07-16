import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  appbar:{
    "& #Light": {
        backgroundColor: "rgba(98, 0, 238, 255)"
    },
    "& #Dark": {
      backgroundColor: "rgba(31, 31, 31, 255)"
  }
},
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  grow: {
    flexGrow: 1,
  },
});

export default useStyles;
