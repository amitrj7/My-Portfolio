import React from 'react';
import {FaGithub} from "react-icons/fa";
import {CgFileDocument} from "react-icons/cg";


const  ProjectBox = ({projectPhoto, projectName}) => {
  const desc = {
    CoinSearch : `Coin-Search is Web App designed to provide real-time cryptocurrency screening and analysis.
    - Used CoinGecko API to fetch live market data for a wide range of cryptocurrencies.
    - Fully Responsive Design web app with responsive layout,ensuring optimal user experience.
    - Multi-Page Webapp uses React Router DOM for multi-page routing,navigation within the application.
    - Real-time Market Data: webapp data will include prices, Market Cap 24 Hour low/high`,
    CoinSearchGithub : "https://github.com/amitrj7/crypto-app-react-main",
    CoinSearchWebsite : "https://crypto-app-react-main.vercel.app/",

    WeatherApp : `Web application designed to provide users with real-time weather information for different locations.
    - OpenWeather API to fetch weather data for different locations.
    - Location Search: Users will be able to search for weather information for a specific location.
    - Data include temperature, humidity, wind speed helpful for Weather Forecast
    - Responsive Design: ensuring optimal user experience across various devices`,
    WeatherAppGithub : "https://github.com/amitrj7/weather-app",
    WeatherAppWebsite : "https://weather-app-ivory-gamma-33.vercel.app/"

  }

  let show ='';
  if(desc[projectName + 'Github']===""){
    show="none";
  }
    
  return (
    <div className='projectBox'> 
        <img className='projectPhoto' src={projectPhoto} alt="Project display" /> 
        <div>
            <br />
            <h3>{projectName}</h3>
            <br />
            {desc[projectName]}
            <br />

            <a style={{display:show}} href={desc[projectName + 'Github']} target='_blank'>
              <button className='projectbtn'><FaGithub/> Github</button>
            </a>

            <a href={desc[projectName + 'Website']} target='_blank'>
              <button className='projectbtn'><CgFileDocument/> Demo</button>
            </a>
        </div>
    </div>
  )
}

export default  ProjectBox