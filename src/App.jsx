// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css';
import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router-dom"
import {Home} from "./Pages/Home";
import {Courses} from "./Pages/Courses";
import {Projects} from "./Pages/Projects";
import {Contact} from "./Pages/Contact";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import PdfViewer from "./components/PdfViewer";
import samplePDF from "./assets/documents/gastonnaveacv.pdf";




function App() {

  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);


 
  return (
    <>
  
  <div>
<PdfViewer pdf={samplePDF}/>

  </div>

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
          <Link className="nav-link" to="/reactportfolio/courses">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/reactportfolio/projects">Projects</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  
</nav>
<div>
  
    </div>
            <div className="badge-base LI-profile-badge" 
            data-locale="en_US" 
            data-size="medium" 
            data-theme="light" 
            data-type="VERTICAL" 
            data-vanity="gastonnavea" 
            data-version="v1">
            <a className="badge-base__link LI-simple-link" 
            href="https://uk.linkedin.com/in/gastonnavea?trk=profile-badge"></a>
      
      </div>


<Routes>
        <Route path="/reactportfolio" element={<Home />} />
        <Route path="/reactportfolio/courses" element={<Courses />} />
        <Route path="/reactportfolio/projects" element={<Projects />} />
        <Route path="/reactportfolio/contact" element={<Contact />} />
        
</Routes>
</>


      // {/* <div>
      //   <a href="https://vitejs.dev" target="_blank">
      //     <img src={viteLogo} className="logo" alt="Vite logo" />
      //   </a>
      //   <a href="https://react.dev" target="_blank">
      //     <img src={reactLogo} className="logo react" alt="React logo" />
      //   </a>
      // </div>
      // <h1>Vite + React</h1>
      // <div className="card">
      //   <button onClick={() => setCount((count) => count + 1)}>
      //     count is {count}
      //   </button>
      //   <p>
      //     Edit <code>src/App.jsx</code> and save to test HMR
      //   </p>
      // </div>
      // <p className="read-the-docs">
      //   Click on the Vite and React logos to learn more
      // </p> */}
    
  )
}

export default App
