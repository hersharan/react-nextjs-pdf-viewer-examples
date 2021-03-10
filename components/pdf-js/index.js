import React, { useEffect, useState, useRef, useCallback } from 'react';
import pdfjsLib from 'pdfjs-dist/build/pdf';
// import pdfjsWorker from 'pdfjs-dist/build/pdf.worker.entry';

// pdfjsLib.GlobalWorkerOptions.workerSrc = 'node_modules/pdfjs-dist/build/pdf.worker.js';
// pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

const url = './assets/pdfFile.pdf';

export default function PdfViewer({ }) {
  const canvasRef = useRef();

  const [pdfRef, setPdfRef] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const renderPage = useCallback((pageNum, pdf = pdfRef) => pdf && pdf.getPage(pageNum).then((page) => {
    const viewport = page.getViewport({ scale: 1.5 });
    const canvas = canvasRef.current;
    canvas.height = viewport.height;
    canvas.width = viewport.width;
    const renderContext = {
      canvasContext: canvas.getContext('2d'),
      viewport,
    };
    page.render(renderContext);
  }), [pdfRef]);

  useEffect(() => {
    if(pdfjsLib){
      console.log('+++', pdfjsLib.version);
      if (pdfjsLib && !pdfjsLib.GlobalWorkerOptions) {
        pdfjsLib.GlobalWorkerOptions = {};
      }
      console.log('asdasd', pdfjsLib.GlobalWorkerOptions);
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.2/pdf.worker.js';
    }
  }, []);

  useEffect(() => {
    renderPage(currentPage, pdfRef);
  }, [pdfRef, currentPage, renderPage]);

  useEffect(() => {
    if(pdfjsLib){
      const loadingTask = pdfjsLib.getDocument(url);
      loadingTask.promise.then((loadedPdf) => {
        setPdfRef(loadedPdf);
      }, (reason) => {
        console.error(reason);
      });
    }
  }, [url]);

  const nextPage = () => pdfRef && currentPage < pdfRef.numPages && setCurrentPage(currentPage + 1);

  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return <canvas ref={canvasRef} />;
}