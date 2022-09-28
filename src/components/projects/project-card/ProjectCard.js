import React, { useEffect } from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import useStyles from "./Styles";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const ProjectPage = ({ name, img, descritpion }) => {
  const classes = useStyles();
  const [ref, inView] = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.4,
          bounce: 0.2,
          ease: [0.5, 0.71, 1, 1.5],
        },
      });
    }
    if (!inView) {
      animation.start({
        x: "-100vw",
      });
    }
  }, [inView]);
  return (
    <div ref={ref}>
      <motion.div initial={{ x: "-100vw" }} animate={animation}>
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
    </div>
  );
};

export default ProjectPage;
