import React, { useState } from "react";
import "./Styles.js";
import { Document, Page, pdfjs } from "react-pdf";
import ResumePDF from "./../../../assets/Resume.pdf";
import Button from "@mui/material/Button";
import { useTheme } from "../../context/ThemeContextProvider.js";
import useStyles from "./Styles.js";
import useWindowSize from "../../hooks/useWindowSize.js";
import { Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Box } from "@material-ui/core";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const classes = useStyles();
  const { theme } = useTheme();
  const size = useWindowSize();
  const [ref, inView] = useInView();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : ""}
        transition={{ duration: 0.8, delay: 0.1 }}
        id="resume"
        className={classes.resume}
      >
        <h2>Pobierz CV</h2>
        <Button id={theme} className={classes.button}>
          <a
            href="https://github.com/Majchrzak202/portfolio/raw/master/src/assets/Resume.pdf"
            download
            style={{ textDecoration: "none", color: "white" }}
            id={theme}
          >
            POBIERZ PDF
          </a>
        </Button>
        {size.width > 600 && (
          <Box className={classes.box}>
            <Document
              file={ResumePDF}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<Skeleton style={{ width: 600 }}></Skeleton>}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </Box>
        )}
      </motion.div>
    </div>
  );
};

export default Resume;
