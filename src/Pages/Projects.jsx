import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Link} from "react-router-dom";
import '../App.css';
import team from '../assets/images/reactPortfolio_ImagesProjects/teamprofilegenerator.png'
import readme from '../assets/images/reactPortfolio_ImagesProjects/readmefilegenerator.png'
import planner from '../assets/images/reactPortfolio_ImagesProjects/dailyplannerapp.png'
import weather from '../assets/images/reactPortfolio_ImagesProjects/weatherdashboard.png'
import quiz from '../assets/images/reactPortfolio_ImagesProjects/codequizapp.png'
import project1 from '../assets/images/reactPortfolio_ImagesProjects/projectdatenight.png'
import {TeamProfileGenerator} from "../Pages/portfolio-teamprofilegenerator.jsx";
import {readmeFileGenerator} from  "../Pages/portfolio-readmefilegenerator.jsx";
import {dailyPlanner} from "../Pages/portfolio-dailyplanner.jsx";
import {weatherdashboard} from "../Pages/portfolio-weatherdashboard.jsx";
import {codeQuiz} from "../Pages/portfolio-codequiz.jsx";
import {projectDateNight} from  "../Pages/portfolio-projectdatenight.jsx";


export function Projects() {


return (
<>
  <h1>Featured Projects</h1>

  <div className="row mb-4">
       <div className="col-12 col-md-6 col-xl-3 mb-4">
                    <Link className="nav-link" to="/reactportfolio/portfolio-teamprofilegenerator">Team Profile Generator</Link>
            <figure className="figure">
              <img className = "figure-img img-fluid img-thumbnail" src={team} alt="Team Profile Generator"></img>             
            </figure>
       </div>
       <div className="col-12 col-md-6 col-xl-3 mb-4">
                    <Link className="nav-link" to="/reactportfolio/portfolio-readmefilegenerator">Readme File Generator</Link>
            <figure className="figure">
              <img className = "figure-img img-fluid img-thumbnail" src={readme} alt="Team Profile Generator"></img>            
            </figure>
       </div>
       <div className="col-12 col-md-6 col-xl-3 mb-4">
                    <Link className="nav-link" to="/reactportfolio/portfolio-dailyplanner">RDaily Planner</Link>
            <figure className="figure">
              <img className = "figure-img img-fluid img-thumbnail" src={planner} alt="Team Profile Generator"></img>            
            </figure>
       </div>
       <div className="col-12 col-md-6 col-xl-3 mb-4">
                    <Link className="nav-link" to="/reactportfolio/portfolio-weatherdashboard">Weather Dashboard</Link>
            <figure className="figure">
              <img className = "figure-img img-fluid img-thumbnail" src={weather} alt="Team Profile Generator"></img>            
            </figure>
       </div>
       <div className="col-12 col-md-6 col-xl-3 mb-4">
                    <Link className="nav-link" to="/reactportfolio/portfolio-codequiz">Code Quiz</Link>
            <figure className="figure">
              <img className = "figure-img img-fluid img-thumbnail" src={quiz} alt="Team Profile Generator"></img>            
            </figure>
       </div>
       <div className="col-12 col-md-6 col-xl-3 mb-4">
                    <Link className="nav-link" to="/reactportfolio/portfolio-projectdatenight">Project 1: Date Night</Link>
            <figure className="figure">
              <img className = "figure-img img-fluid img-thumbnail" src={project1} alt="Team Profile Generator"></img>            
            </figure>
       </div>


  </div>

  <Routes>
        <Route path="/reactportfolio/portfolio-teamprofilegenerator" element={<TeamProfileGenerator />} />
     
        
</Routes>
       
  </>
)
};  // end of function