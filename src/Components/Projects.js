import React from 'react';
import ProjectBox from './ProjectBox';
import CoinSearch from '../images/CoinSearch.png';
import WeatherApp from '../images/WeatherApp.png';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={CoinSearch} projectName="CoinSearch" />
        <ProjectBox projectPhoto={WeatherApp} projectName="WeatherApp" />
      </div>

    </div>
  )
}

export default Projects