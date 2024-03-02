//import React from 'react'
import React,{useEffect} from "react";

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