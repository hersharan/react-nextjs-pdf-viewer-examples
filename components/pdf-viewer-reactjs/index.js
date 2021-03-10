import React from 'react'

import PDFViewer from 'pdf-viewer-reactjs'

const ExamplePDFViewer = () => {
  return (
    <PDFViewer
      document={{
        url: './assets/pdfFile.pdf',
      }}
    />
  )
}

export default ExamplePDFViewer