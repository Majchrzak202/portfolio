import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  resume: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "150px",
    paddingBottom: "30px",
  },
  resumeButton: {
   backgroundColor: 'black',
  },
});

export default useStyles;

/* resume { 
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
    padding-bottom: 30px;
    
} */
