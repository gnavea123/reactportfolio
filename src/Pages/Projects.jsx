import React from 'react';
import '../App';
import background from '../assets/images/reactPortfolio_ImagesProjects/mainheader.png'
import teamProfileGenerator from '../assets/images/reactPortfolio_ImagesProjects/teamprofilegenerator.png'
import readmeFileGenerator from '../assets/images/reactPortfolio_ImagesProjects/readmefilegenerator.png'
import dailyPlanner from '../assets/images/reactPortfolio_ImagesProjects/dailyplannerapp.png'
import weatherdashboard from '../assets/images/reactPortfolio_ImagesProjects/weatherdashboard.png'
import codeQuiz from '../assets/images/reactPortfolio_ImagesProjects/codequizapp.png'
import projectDateNight from '../assets/images/reactPortfolio_ImagesProjects/projectdatenight.png'
export function Projects() {


  const panels = document.querySelectorAll('.panelProjects')

  panels.forEach((panel) => {
    panel.addEventListener ('click', () => {
      removeActiveClasses()
      panel.classList.add('active')
    })
  })


  function removeActiveClasses() {
    panels.forEach((panel) => {
      panel.classList.remove('active')
    })
  }


  return (
    <div>
      <h1>Projects</h1>
      
<div className="containerProjects">
    <div className="panelProjects active" style={{ backgroundImage: `url(${background})` }}>
    <h3>Explore the Projects</h3>
    </div>
    <div className="panelProjects" style={{ backgroundImage: `url(${teamProfileGenerator})` }}>
    <h3>Team Profile Generator App</h3>
    </div>
    <div className="panelProjects" style={{ backgroundImage: `url(${readmeFileGenerator})` }}>
    <h3>Readme File Generator App</h3>
    </div>
    <div className="panelProjects" style={{ backgroundImage: `url(${dailyPlanner})` }}>
    <h3>Daily Planner App</h3>
    </div>
    <div className="panelProjects" style={{ backgroundImage: `url(${weatherdashboard})` }}>
    <h3>Weather Dashboard App</h3>
    </div>
    <div className="panelProjects" style={{ backgroundImage: `url(${codeQuiz})` }}>
    <h3>Code Quiz App</h3>
    </div>
    <div className="panelProjects" style={{ backgroundImage: `url(${projectDateNight})` }}>
    <h3>Project 1: Date Night App</h3>
    </div>
    
    
    


</div> 

    </div>
  )
}
