import React from "react";
import { Box } from "@mui/system";
import { useTheme } from "../context/ThemeContextProvider";
import SocialIcons from "../socialIcons/SocialIcons";
import { Typography } from "@material-ui/core";
import useStyles from "./Styles";

const Footer = () => {
  const classes = useStyles();
  const { theme } = useTheme();
  return (
    <div className={classes.main}>
      <Box id={theme} className={classes.footer}>
        <Box className={classes.box}>
          <Typography className={classes.title}>
            Copyright luba.dev 2022
          </Typography>
          <SocialIcons />
        </Box>
      </Box>
    </div>
  );
};

export default React.memo(Footer);
