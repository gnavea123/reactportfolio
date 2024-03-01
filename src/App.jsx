// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import React from "react";
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router-dom"
import {Home} from "/reactportfolio/src/Pages/Home";
import {Courses} from "/reactportfolio/src/Pages/Courses";
import {Projects} from "/reactportfolio/src/Pages/Projects";
import {Contact} from "/reactportfolio/src/Pages/Contact";

function App() {


  return (
    <>
    <div className="container"></div>
      <nav>
        <ul>
            <li> <Link to="/reactportfolio">Home</Link></li>
            <li> <Link to="/reactportfolio/courses">Courses</Link></li>
            <li> <Link to="/reactportfolio/projects">Projects</Link></li>
            <li> <Link to="/reactportfolio/contact">Contact</Link></li>

        </ul>

      </nav>

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
