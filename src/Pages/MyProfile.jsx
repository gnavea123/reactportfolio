import React, { useEffect, useState } from "react";
//import { Helmet } from "react-helmet-async";
import axios from "axios";


export const MyProfile = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProfileInformation = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          "https://api.github.com/users/gnavea123"
        );

        console.log("response value: ");
        console.log(response.data);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getProfileInformation();
  }, []);

 

  return (

    <>    
        
       
          <title>My Profile</title>
          <meta name="description" content="Checkout my profile on github" />
          <link rel="canonical" href="https://github.com/gnavea123" />
          
        
          {data && (
            <div>
              <img alt="avatar" src={data.avatar_url} />
              
                <h2>{data.name}</h2>
                <p>{data.bio}</p>
                
              
                  <a href="https://github.com/gnavea123?tab=following">
                    <b> Following: {data.following}</b>
                  </a>
                  <a href="https://github.com/gnavea123?tab=followers">
                    <b> Followers: {data.followers}</b>
                  </a>
                  <a href="https://github.com/gnavea123?tab=repositories">
                    <b> Repos: {data.public_repos}</b>
                  </a>
               

                <p>
                 <p>  Location {data.location}</p>
                  
                </p>
     
                <span>                
                  <a
                    href="https://uk.linkedin.com/in/gastonnavea"
                    target="_blank">
                    Linkedin Profile
                  </a>
                </span>
                <br></br>
                <span>
                  
                  <a
                    href="https://github.com/gnavea123"
                    target="_blank">
                    Github Profile
                  </a>
                </span>
          
              
            </div>
          )}
      
  

    </>
  );
};

// export default MyProfile;