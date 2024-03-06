import React, { useEffect, useState } from "react";
//import { Helmet } from "react-helmet-async";
//import avatarImage from "../assets/images/githubprofile_avatar.jpeg";
import '../App.css';
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
        
      
<div className="cardGithub">
<div>
  <h3>My Github Summary:</h3>
<img src={data.avatar_url} alt="" className="avatarGithub" />
</div>
<div className="user-infoGithub">
<h3>Gaston Navea</h3>
<p>Front-end Developer</p>
                  
  <ul>
<li>
<a href="https://github.com/gnavea123?tab=followers"><b> Followers: {data.followers}</b> </a>
</li>
<li>
<a href="https://github.com/gnavea123?tab=following"><b> Following: {data.following}</b></a>
</li>
<li>
<a href="https://github.com/gnavea123?tab=repositories"><b> Link to Repositories: {data.public_repos}</b></a>
</li>
<span>
<a href="https://github.com/gnavea123" target="_blank"> Link to Github Profile </a> </span>
</ul>
</div>
</div>

    </>
  );
};

// export default MyProfile;