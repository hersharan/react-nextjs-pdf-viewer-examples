import Head from 'next/head';
import Frame from '../components/frame';
import MGR from '../components/mgr';
import PDFJS from '../components/pdf-js';
import PdfReact from '../components/pdf-viewer-reactjs';
import ReactPDF from '../components/react-pdf';
import PhuReactPDF from '../components/phu-react-pdf';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>i-Frame</h1>
        <Frame />
        <h1>react-pdf</h1>
        <ReactPDF />
        <h1>MGR</h1>
        <MGR />
        <h1>PDFJS</h1>
        <PDFJS/>
        <h1>pdf-viewer-reactjs</h1>
        <PdfReact/>
        <h1>PHU React PDF</h1>
        <PhuReactPDF />
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  )
}
