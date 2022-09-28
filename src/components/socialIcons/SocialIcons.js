import React from "react";
import { Button, Box, Grid } from "@material-ui/core";
import { GitHub, LinkedIn, Email } from "@material-ui/icons";
import { useTheme } from "../context/ThemeContextProvider";
import useStyles from "./Styles";

const SocialIcons = () => {
  const { theme } = useTheme();
  const classes = useStyles();

  return (
    <Box>
    <Grid className={classes.socialIcons}  container>
      <Grid item>
        <Button href="https://github.com/Majchrzak202" target="_blank">
          <GitHub id={theme} />
        </Button>
      </Grid>

      <Grid item>
        <Button href="https://www.linkedin.com/in/marcinluba/" target="_blank">
          <LinkedIn id={theme} />
        </Button>
      </Grid>

      <Grid item>
        <Button
          onClick={() => (window.location = "mailto:marcinluba@protonmail.com")}
        >
          <Email id={theme} />
        </Button>
      </Grid>
    </Grid>
    </Box>
  );
};

export default SocialIcons;
