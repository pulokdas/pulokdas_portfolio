import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaFire } from 'react-icons/fa';
import { TbBrandTailwind } from "react-icons/tb";
const Projectdetails = () => {
    const project = useLoaderData();
    const technologyIcons = {
        React: <FaReact color="#61dafb" />,
    'Tailwind CSS': <TbBrandTailwind color="#61dafb" />, // Replace with the actual Tailwind icon component
    Firebase: <FaFire color="#FFCA28" />,
    Javascript: <FaJs color="#F7DF1E" />,
    Html: <FaHtml5 color="#E34C26" />,
    Express: <FaNodeJs color="#8CC84B" />,
    MongoDB: <FaDatabase color="#4DB33D" />,
        
      };
    console.log(project)
    const {title ,description ,technologies, image , github, demo, status} = project
  return (
    <div className='bg-[#1f2229] text-[#d8dee9] '>

        <div className='  grid lg:grid-cols-2'>
            <div className=' '>
                <img src={image} className=''  alt="" />
                <div className=' space-y-8 px-5'>
                    <h1 className='text-3xl'>Project Name: <span className=' font-bold text-[#61dafb]'>{title}</span></h1>
                    <h1 className='text-3xl'>status: <span className=' font-bold text-[#61dafb]'>{status}</span></h1>
                    <h1 className='text-3xl'>technologies: <span className=' text-xl flex gap-4 font-bold text-[#61dafb]'> {technologies.map((tech, index) => (
              <span key={index} className="technology-icon flex flex-row-reverse items-center gap-1">
              <span>{technologies[index]}</span><span>{technologyIcons[tech]}</span>
            </span>
          ))}</span></h1>
         <div className=' space-y-3 '>
         <Link className="btn btn-block   rounded bg-[#282c34]  text-[#61dafb]  border-[#61dafb]   hover:bg-[#61dafb] hover:text-[#282c34]" to={demo} target="_blank">
       Live Link
      </Link>
      <Link className="btn btn-block rounded bg-[#282c34]  text-[#61dafb]  border-[#61dafb]   hover:bg-[#61dafb] hover:text-[#282c34]" to={github} target="_blank">
      <FaGithub />Github repo
      </Link>
         </div>
                </div>
            </div>
            <div className=' h-screen '>
                <h1 className='text-3xl font-bold pt-10 text-[#61dafb] text-center'>DESCRIPTION</h1>
                <p className='p-10'>{description}</p>
               <div className='flex flex-col gap-4 items-center justify-center'>
               <h2 className='text-xl text-teal-500 text-center'> Detailed description will be Added here soon..</h2>
                <Link to='/' className="btn flex items-center justify-center w-1/3 rounded bg-[#282c34]  text-[#61dafb]  border-[#61dafb]   hover:bg-[#61dafb] hover:text-[#282c34]" >
      Back To HOME
      </Link>
               </div>
            </div>
        </div>
        
        </div>
  )
}

export default Projectdetails