import React from "react";
import "./Resume.css";
import { Document, pdfjs } from "react-pdf";
import ResumePDF from "./../../assets/Resume.pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
  console.log(ResumePDF);
  return <div className="resume">
    <Document file={ResumePDF}>

    </Document>
  </div>;
};

export default Resume;
