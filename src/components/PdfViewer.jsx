//

import React from "react";
import {Document, Page} from 'react-pdf';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;


const PdfViewer = ({pdf}) => {

    return (
<Document file= {pdf} options = {{ workerSrc: "/pdf.worker.js"}}>
<Page pageNumber={1}/>

</Document>

    )
  //
}
export default PdfViewer
