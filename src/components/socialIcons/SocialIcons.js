import React from "react";
import { Button, Box } from "@material-ui/core";
import { GitHub, LinkedIn, Email, Instagram } from "@material-ui/icons";
import { useTheme } from "../context/ThemeContextProvider";
import useStyles from "./Styles";

const SocialIcons = () => {
  const { theme } = useTheme();
  const classes = useStyles();

  return (
    <Box className={classes.socialIcons}>
      <Button>
        <GitHub id={theme} />
      </Button>
      <Button>
        <LinkedIn id={theme} />
      </Button>
      <Button>
        <Email id={theme} />
      </Button>
      <Button>
        <Instagram id={theme} />
      </Button>
    </Box>
  );
};

export default SocialIcons;
