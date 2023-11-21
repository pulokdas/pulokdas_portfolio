import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard';



const Projects = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/projects.json');
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])
    console.log(data)
    return (
        <div id='projects' className='bg-[#1f2229] text-[#d8dee9] py-32'>
            <h1 data-aos="fade-down"
         data-aos-duration="900" 
         className='text-5xl text-[#56b6c2] font-bold  my-20 text-center'>Projects I have done</h1>
        <div className=' w-11/12 mx-auto grid lg:grid-cols-2  gap-16'>
            {data.map((project, index) => (
                <div
                data-aos="zoom-in-up"
                data-aos-delay={`${index * 100}`} // Adjust the delay duration as needed
                data-aos-duration="900">
                 <ProjectCard key={index} project={project} />
                  
                </div>
            ))}
        </div>
        </div>
    )
}

export default Projects
