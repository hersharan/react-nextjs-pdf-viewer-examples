

import dynamic from 'next/dynamic';

const PdfViewer = dynamic(
  () => import('./viewer'),
  { ssr: false }
);

export default PdfViewer;