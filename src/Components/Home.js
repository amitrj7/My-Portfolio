import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode,SiGeeksforgeeks} from "react-icons/si"
import { BsDownload } from "react-icons/bs";
import pdf from "../Resume.pdf";
import { Document, Page, pdfjs } from 'react-pdf';

const Home = () => {
  const style = { color:"", fontSize: "1em" }
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>AMIT RAJ</b></h1>
          <Typed/>   
        </div>
        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div id='SocialLinks'>
          <a href="https://github.com/amitrj7" target='_blank'><FaGithub className='Links' style={style}/></a>
          <a href="https://www.linkedin.com/in/amit-raj-1493a6216/" target='_blank'><FaLinkedin className='Links' style={style}/></a>
          <a href='mailTo:amitrj09@gmail.com' target='_blank'><GrMail className='Links' style={style}/></a>
          <a href="https://leetcode.com/amitrj07/" target="_blank"><SiLeetcode className='Links' style={style}/></a>
          <a href="https://auth.geeksforgeeks.org/user/wait/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" target='_blank'><SiGeeksforgeeks className='Links' style={style}/></a>
      </div>

      <a href={pdf} target='_blank' download="Amit's Resume">
            <button className='HomeCv' type='button'>
              <h3><BsDownload/>&nbsp; Download CV </h3>
            </button>
      </a>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            Hello, I'm Amit Raj, a skilled Frontend developer.
            I love the process of changing a raw idea into a website or a product 
            that impacts lives. 
            I want to do work that challenges me as a developer & work that I can 
            be proud of.
            <br></br>
            I am efficient in creating dynamic and responsive web applications. I have a deep understanding of <b>JavaScript, JSX, React js</b> library,
            allowing me to build efficient user interfaces and deliver seamless user experiences.
            I've successfully worked on projects involving <b>component-based architecture, state management, and integrating with APIs</b>. 
            I'm passionate about crafting elegant and functional front-end solutions and always eager to take on new challenges in the world of web development.
            {/* I am fluent in <b>C++</b> and know a bit of <b>Python</b> and am working on a few 
            projects in the <b>MERN</b> stack.<br /> */}
            <br></br>
            I planed to learn <b>Next.js</b>, <b>Three.js</b> and<b> Typescript</b> in the near future. <br /><br />
            Also, I love <b>coffee</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home