import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact, FaPython, FaGitAlt, FaGithub, FaNpm, FaCss3Alt} from "react-icons/fa";
import {DiNodejs, DiJavascript1,DiJava,DiHtml5} from "react-icons/di";
import {SiExpress, SiMongodb, SiVercel,SiMysql} from "react-icons/si";


const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        Python: <FaPython/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        CSS: <FaCss3Alt/>,
        Node : <DiNodejs/>,
        HTML5 : <DiHtml5/>,
        Express : <SiExpress/>,
        MongoDb : <SiMongodb/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Java : <DiJava/>,
        Vercel : <SiVercel/>,
        MySQL : <SiMysql/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
