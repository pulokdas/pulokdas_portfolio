import React from 'react'
import { FaGithub } from "react-icons/fa";

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaFire } from 'react-icons/fa';
import { TbBrandTailwind } from "react-icons/tb";

import { Link } from 'react-router-dom';
const ProjectCard = ({project}) => {
    const {id ,title ,description ,technologies, image , github, demo, status} = project
    const technologyIcons = {
        React: <FaReact color="#61dafb" />,
    'Tailwind CSS': <TbBrandTailwind color="#61dafb" />, // Replace with the actual Tailwind icon component
    Firebase: <FaFire color="#FFCA28" />,
    Javascript: <FaJs color="#F7DF1E" />,
    Html: <FaHtml5 color="#E34C26" />,
    Express: <FaNodeJs color="#8CC84B" />,
    MongoDB: <FaDatabase color="#4DB33D" />,
        
      };
  return (
    <div className="card  bg-white bg-opacity-5  shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <div className='flex items-center justify-between'>
    <h2 className="card-title text-4xl text-[#61dafb]"> {title}</h2>
    <div className="technology-icons flex text-2xl">
          {technologies.map((tech, index) => (
              <span key={index} className="technology-icon">
              {technologyIcons[tech]}
            </span>
          ))}
        </div>
    </div>
          <p>{description}</p>
    <div className="">
     <div className='flex gap-2 items-center justify-center'>
     <Link className="btn btn-sm w-1/2  rounded bg-[#282c34]  text-[#61dafb]  border-[#61dafb]   hover:bg-[#61dafb] hover:text-[#282c34]" to={demo} target="_blank">
       Live Link
      </Link>
      
      <Link className="btn btn-sm w-1/2  rounded bg-[#282c34]  text-[#61dafb]  border-[#61dafb]   hover:bg-[#61dafb] hover:text-[#282c34]" to={github} target="_blank">
      <FaGithub />Github repo
      </Link>
     </div>
      <Link to={`/project/${id}`} className="btn btn-sm w-full mt-2  rounded bg-[#61dafb]  text-[#282c34]  border-[#61dafb]   hover:bg-[#282c34] hover:text-[#61dafb]" >
      View details
      </Link>
      
    </div>
  </div>
</div>
 
  )
}

export default ProjectCard





