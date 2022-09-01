import React, { useState } from "react";
import "./ResumeStyles.js";
import { Document, Page, pdfjs } from "react-pdf";
import ResumePDF from "./../../assets/Resume.pdf";
import Button from "@mui/material/Button";
import useStyles from "./ResumeStyles.js";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const classes = useStyles();

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={classes.resume}>
      <h2>Download Resume</h2>
      <Button
        sx={{
          backgroundColor: "#6200ee",
          marginBottom: "30px",
        }}
        variant="contained"
      >
        <a
          href="https://github.com/Majchrzak202/portfolio/raw/master/src/assets/Resume.pdf"
          download
        >
          DOWNLOAD PDF
        </a>
      </Button>
      <Document file={ResumePDF} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
    </div>
  );
};

export default Resume;
