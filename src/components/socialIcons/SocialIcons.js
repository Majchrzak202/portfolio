import React from "react";
import { Button, Box } from "@material-ui/core";
import { GitHub, LinkedIn, Email, Instagram } from "@material-ui/icons";

const SocialIcons = () => {
  return (
    <Box>
      <Button>
        <GitHub />
      </Button>
      <Button>
        <LinkedIn />
      </Button>
      <Button>
        <Email />
      </Button>
      <Button>
        <Instagram />
      </Button>
    </Box>
  );
};

export default SocialIcons;
