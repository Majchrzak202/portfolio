import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  card: {
    [theme.breakpoints.up(1800)]: {
      width: "85%",
    },
    "&:hover": {
      transform: "scale(1.02)",
      transition: "all .3s ease-in-out",
    },
  },
}));

export default useStyles;
