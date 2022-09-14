import React, { useState } from "react";
import "./Styles.js";
import { Document, Page, pdfjs } from "react-pdf";
import ResumePDF from "./../../../assets/Resume.pdf";
import Button from "@mui/material/Button";
import { useTheme } from "../../context/ThemeContextProvider.js";
import useStyles from "./Styles.js";
import { Box } from "@material-ui/core";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const classes = useStyles();
  const { theme } = useTheme();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={classes.resume}>
      <h2>Download Resume</h2>
      <Button
        id={theme}
        sx={{
          marginBottom: "30px",
          color: "white",
        }}
      >
        <a
          href="https://github.com/Majchrzak202/portfolio/raw/master/src/assets/Resume.pdf"
          download
        >
          DOWNLOAD PDF
        </a>
      </Button>
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
      </Box>
    </div>
  );
};

export default Resume;
