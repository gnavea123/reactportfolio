
import './App.css';
import React from "react";
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router-dom"
import {Home} from "./Pages/Home";
import {CV} from "./Pages/CV";
import {Projects} from "./Pages/Projects";
import {Contact} from "./Pages/Contact";
import {MyProfile} from "./Pages/MyProfile";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
// import PdfViewer from "./components/PdfViewer";
// import samplePDF from "./assets/documents/gastonnaveacv.pdf";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';




function App() {




 
  return (
    <>
  


      <nav className ="navbar fixed-top navbar-expand-lg bg-primary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">React Portfolio</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/reactportfolio">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reactportfolio/courses">CV</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reactportfolio/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reactportfolio/myprofile">Github Profile</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reactportfolio/contact">Contact</Link>
        </li>
   
      </ul>
    </div>
  </div>
  
</nav>

<div className="github-card" data-github="gnavea123" data-width="400" data-height="" data-theme="medium"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
       



<Routes>
        <Route path="/reactportfolio" element={<Home />} />
        <Route path="/reactportfolio/courses" element={<CV />} />
        <Route path="/reactportfolio/projects/*" element={<Projects />} />
        <Route path="/reactportfolio/contact" element={<Contact />} />
        <Route path="/reactportfolio/myprofile" element={<MyProfile />} />
        <Route path="/reactportfolio/contact" element={<Contact />} />
        
</Routes>
</>

    
  )
}

export default App
