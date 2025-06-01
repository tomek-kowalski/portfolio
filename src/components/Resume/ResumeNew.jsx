import React, { useState, useEffect } from "react";
import { Container} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../../assets/Fullstack_CV_Tomasz_Kowalski.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import '../../styles/pdfStyles.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DownloadButton = () => (
  <Button
    variant="primary"
    href={pdf}
    target="_blank"
    title="Download CV in PDF format"
    style={{ maxWidth: "250px", margin: "20px 0" }}
  >
    <AiOutlineDownload /> &nbsp;Download CV
  </Button>
);

function ResumeNew() {
  const [width, setWidth] = useState(window.innerWidth);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="resume-full-page">
      <Container fluid className="d-flex flex-column align-items-center justify-content-center min-vh-100 py-4">
        <DownloadButton />

        <div className="pdf-container">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<div>Loading CV...</div>}
            error={<div>Failed to load CV.</div>}
            className="d-flex flex-column align-items-center"
            options={{
              cMapUrl: 'https://unpkg.com/pdfjs-dist@3.4.120/cmaps/',
              cMapPacked: true,
            }}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                scale={width > 786 ? 1.4 : 0.7}
                renderMode="canvas"
              />
            ))}
          </Document>
        </div>

        <DownloadButton />
      </Container>
    </div>
  );
}

export default ResumeNew;
