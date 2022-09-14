import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import useStyles from "./Styles";
import { motion } from "framer-motion";

const ProjectPage = ({ name, img, descritpion }) => {
  const classes = useStyles();
  return (
    <motion.div transition={{ duration: 0.5 }} animate={{ y: -180 }}>
      <Card className={classes.card}>
        <CardContent>
          <div>
            <Typography variant="h5" gutterBottom>
              {name}
            </Typography>
            <Typography>{descritpion}</Typography>
          </div>
        </CardContent>
        <CardMedia
          className={classes.media}
          src={img}
          image={img}
          title={name}
        />
      </Card>
    </motion.div>
  );
};

export default ProjectPage;
