//import React from 'react'
import React,{useEffect} from "react";
import { UserCard } from 'react-ui-cards';
// import headerImage from "../assets/images/githubprofile_header.jpeg";
// import avatarImage from "../assets/images/githubprofile_avatar.jpeg"

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

//   const Example = () => <UserCard
//   float
//   href='https://github.com/nukeop'
//   header={headerImage}
//   avatar={avatarImage}
//   name='Gaston Navea'
//   positionName='Data/Infrastructure Manager'
// />



  return (
    <>
    
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
    </>




  )
}