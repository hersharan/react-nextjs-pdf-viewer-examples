import React from 'react';
import PDFViewer from 'mgr-pdf-viewer-react';

const ExamplePDFViewer = () => {
  return (<PDFViewer document={{
    url: './assets/pdfFile.pdf'
  }} />);
}

export default ExamplePDFViewer