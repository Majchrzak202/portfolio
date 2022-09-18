import React from "react";
import { Grid, Typography, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useTheme } from "../context/ThemeContextProvider";

const typography = [
  { description: "Interest in Blockchain and WEB 3.0 technology" },
  {
    description:
      "8 years of experience in banking, knowledge of processes and products",
  },
  { description: "Openness, communication and teamwork skills" },
];

const useStyles = makeStyles({
  main: {
    minHeight: "50vh",
    padding: "30px",
    "& #Light": {
      backgroundColor: "rgba(98, 0, 238, 255)",
      color: 'white'
    },
    "& #Dark": {
      backgroundColor: "rgba(40,48,62,255)",
    },
  },

  card: {
    padding: "10px",
    height: "10em",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});

const MyStrength = () => {
  const classes = useStyles();
  const { theme } = useTheme();

  return (
    <div className={classes.main}>
      <Typography
        style={{
          fontWeight: 800,
          fontStyle: "Open Sans",
          textAlign: "center",
          fontSize: "25px",
        }}
      >
        My strengths:
      </Typography>
      <Grid spacing={3} container>
        {typography.map((item) => (
          <Grid
            style={{ padding: "30px", width: "auto", height: "auto" }}
            xs={12}
            sm={4}
            md={4}
            lg={4}
            item
          >
            <Card className={classes.card} id={theme}>
              <Typography
                style={{
                  fontWeight: 800,
                  fontStyle: "Open Sans",
                  textAlign: "center",
                }}
              >
                {item.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MyStrength;
