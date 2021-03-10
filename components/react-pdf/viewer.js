import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
// import { Document, Page } from "react-pdf/dist/entry.webpack";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

console.log('pdfjs.version', pdfjs.version, pdfjs.GlobalWorkerOptions.workerSrc);

const PdfViewer = ({
  url, width, pageNumber
}) => (
  <Document file="./assets/pdfFile.pdf">
    <Page
      pageNumber={pageNumber}
      width={width}
    />
  </Document>
);

export default PdfViewer;