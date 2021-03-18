import React from 'react';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
// import filePDF from './dummy.pdf'

const filePDF = './assets/pdfFile.pdf';
function App() {
  return (
    <div>
     <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.5.207/build/pdf.worker.min.js">
    <div id="pdfviewer" style={{ height: '750px' }}>
        <Viewer fileUrl={filePDF} /> 
    </div>
    </Worker>
    </div>
  );
}

export default App;