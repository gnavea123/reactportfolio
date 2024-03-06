//import React from 'react'
import React,{useEffect} from "react";
import { UserCard } from 'react-ui-cards';
// import headerImage from "../assets/images/githubprofile_header.jpg";
// import avatarImage from "../assets/images/githubprofile_avatar.jpeg";


//console.log(avatarImage);

export function Home() {

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

    <h2>About me</h2>
    <br></br>

    <p>
    An accomplished and process-oriented executive with extensive experience in leading data-driven projects and high-performing IT teams that drive business decisions and improve customer experience. Has excellent Cloud technology skills and strong expertise in MS Data Platform, data security, data governance, data modelling, data integration and data visualisation. Skilled at turn-ing data into actionable insights. Experience of the insurance and Public Sector industry with demonstrated success in defining and setting key data strategy using various tools and technologies, including AWS, MS Azure, MS Data Factory, SQL, and Agile Methodologies.

    
    </p>
    

    <section>
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
     
  </section>
 
  
    </>




  )
}
