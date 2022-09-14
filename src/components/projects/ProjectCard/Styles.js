import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    media: {
        height: 0,
        paddingTop: "56.25%", // 16:9
      },

      card: {
        marginTop: '150px',
        "&:hover": {
          transform: "scale(1.02)",
          transition: "all .3s ease-in-out"
        },
      }
});

export default useStyles;