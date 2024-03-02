//import React from 'react'
import React,{useEffect} from "react";
import { UserCard } from 'react-ui-cards';
import headerImage from "../assets/images/githubprofile_header.jpg";
import avatarImage from "../assets/images/githubprofile_avatar.jpeg";

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

  useEffect(() => { <UserCard
    float
    href='https://githu)b.com/nukeop'
    header={headerImage}
    avatar={avatarImage}
    name='Gaston Navea'
    positionName='Data/Infrastructure Manager'
  /> });




  return (
    <>
<div>
<div className="github-card" data-github="gnavea123" data-width="400" data-height="" data-theme="medium"></div>
<script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
</div>

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
