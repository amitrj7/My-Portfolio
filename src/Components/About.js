import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            Hi, my name is <b>Amit Raj</b> and I am from Bangalore, India.
            I'm a <b>Frontend web developer</b> and a final year college student pursuing <b>B.E in Information Science Engineering</b>. <br/><br/>
            I've successfully worked on projects involving <b>Component-based architecture, State management, and Integrating with APIs</b>. 
            I'm passionate about crafting elegant and functional front-end solutions and always eager to take on new challenges in the world of web development.
            I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
            I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the Home page.<br/>
          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Javascript' />
        <Skills skill='HTML5' />
        <Skills skill='CSS' />
        <Skills skill='MySQL' />
        <Skills skill='Npm' />
        {/* <Skills skill='Node' />
        <Skills skill='Express' />
        <Skills skill='MongoDb' /> */}
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='C++' />
        <Skills skill='Java' />
        <Skills skill='Python' />
        <Skills skill='Vercel' />
        
        
      </div>
    </>
  )
}

export default About