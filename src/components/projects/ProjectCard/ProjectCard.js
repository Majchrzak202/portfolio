import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";

import useStyles from "./Styles";

const ProjectPage = ({ name, img, descritpion }) => {
  const classes = useStyles();
  return (
    <Card>
      <CardContent>
        <div>
          <Typography variant="h5" gutterBottom>
            {name}
          </Typography>
          <Typography>{descritpion}</Typography>
        </div>
      </CardContent>
      <CardMedia className={classes.media} src={img} image={img} title={name} />
    </Card>
  );
};

export default ProjectPage;
