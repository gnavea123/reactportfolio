// import React from 'react';
// import PdfViewer from "./components/PdfViewer";
// import samplePDF from "./assets/documents/gastonnaveacv.pdf";
import PdfViewer from "../components/PdfViewer";
import samplePDF from "../assets/documents/gastonnaveacv.pdf";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';


export function CV() {


  return (
    <div>
<h1>Curriculum</h1>

<div>
<PdfViewer pdf={samplePDF}/>

  </div>



    </div>
  )
}

