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
      <Button href="https://github.com/Majchrzak202" target="_blank">
        <GitHub id={theme} />
      </Button>
      <Button href="https://www.linkedin.com/in/marcinluba/" target="_blank">
        <LinkedIn id={theme} />
      </Button>
      <Button onClick={() => (window.location = "mailto:yourmail@domain.com")}>
        <Email id={theme} />
      </Button>
      <Button  href="https://www.instagram.com/cwaniakmentalny/" target="_blank">
        <Instagram id={theme} />
      </Button>
    </Box>
  );
};

export default SocialIcons;
