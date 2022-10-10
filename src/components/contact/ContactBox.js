import React from "react";
import { Box } from "@material-ui/core";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContextProvider";
import { GitHub } from "@material-ui/icons";
import { LinkedIn } from "@material-ui/icons";
import useStyles from "./Styles";

const ContactBox = () => {
  const classes = useStyles();
  const { theme } = useTheme();
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      animate={{ y: -20, x: 0, opacity: 1 }}
    >
      <Box className={classes.main}>
        <h1 className={classes.title}>Feel free to Connect with me:</h1>
        <Box style={{ display: "flex" }}>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Box id={theme} className={classes.box}>
              <a href="https://github.com/Majchrzak202">
                <GitHub className={classes.muiIcon} />
              </a>
            </Box>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Box id={theme} className={classes.box}>
              <a href="https://www.linkedin.com/in/marcinluba/">
                <LinkedIn className={classes.muiIcon} />
              </a>
            </Box>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
};

export default React.memo(ContactBox);
