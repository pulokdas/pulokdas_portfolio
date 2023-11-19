import React from 'react'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaFire } from 'react-icons/fa';
import { TbBrandTailwind } from "react-icons/tb";
import Skill from './Skill';
import Skilldescription from './Skilldescription';
const Skills = () => {
  const skillsData = [
    {
      name: 'HTML',
      icon: <FaHtml5 />,
      bgColor: '#E34F26', // HTML logo color
      textColor: '#FFFFFF',
      iconColor: '#FFFFFF',
      progress: 95,
      description: [
        'Proficient in creating structured and semantic markup.',
        'Experienced in building the foundation of web pages with HTML5.',
        'Ensures accessibility and compatibility across different browsers.',
      ],
    },
    {
      name: 'CSS',
      icon: <FaCss3 />,
      bgColor: '#1572B6', // CSS logo color
      textColor: '#FFFFFF',
      iconColor: '#FFFFFF',
      progress: 85,
      description: [
        'Skilled in styling web pages with CSS3 for a visually appealing layout.',
        'Capable of implementing responsive design for various devices.',
        'Knowledgeable about CSS frameworks and preprocessors.',
      ],
    },
    {
      name: 'Tailwind',
      icon:<TbBrandTailwind />, // Adjust the size as needed
      bgColor: '#38a89d',
      textColor: 'white',
      progress: 80,
      description: [
        'Proficient in using Tailwind CSS for efficient and rapid UI development.',
        'Experience in styling web applications with utility-first CSS classes.',
        'Knowledgeable about responsive design and customization in Tailwind CSS.',
      ],
    },
    {
      name: 'JavaScript',
      icon: <FaJs />,
      bgColor: '#F7DF1E', // JavaScript logo color
      textColor: '#323330',
      iconColor: '#323330',
      progress: 75,
      description: [
        'Strong command over JavaScript for interactive and dynamic web development.',
        'Proficient in working with DOM manipulation and event handling.',
        'Experienced in asynchronous programming and AJAX for seamless user experiences.',
      ],
    },
    {
      name: 'React',
      icon: <FaReact />,
      bgColor: '#61DAFB', // React logo color
      textColor: '#20232A',
      iconColor: '#20232A',
      progress: 80,
      description: [
        'Expertise in building modern and scalable web applications with React.',
        'Proficient in state management using hooks and Redux.',
        'Capable of creating reusable components for efficient development.',
      ],
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      bgColor: '#339933', // Node.js logo color
      textColor: '#FFFFFF',
      iconColor: '#FFFFFF',
      progress: 70,
      description: [
        'Skilled in server-side development with Node.js.',
        'Experience in building RESTful APIs and server-side logic.',
        'Familiarity with package management and npm.',
      ],
    },
    {
      name: 'MongoDB',
      icon: <FaDatabase />,
      bgColor: '#47A248', // MongoDB logo color
      textColor: '#FFFFFF',
      iconColor: '#FFFFFF',
      progress: 75,
      description: [
        'Proficient in MongoDB for NoSQL database design.',
        'Experienced in creating and managing collections and documents.',
        'Knowledgeable about indexing, querying, and aggregation.',
      ],
    },
    {
      name: 'Firebase',
      icon: <FaFire />,
      bgColor: '#FFCA28', // Firebase logo color
      textColor: '#000000',
      iconColor: '#000000',
      progress: 90,
      description: [
        'Skilled in Firebase for real-time database and authentication.',
        'Capable of integrating Firebase services into web and mobile applications.',
        'Knowledgeable about Firebase hosting and cloud functions.',
      ],
    },
  ];

  
    return (
      <div className=" ">
        <h1 data-aos="fade-down"
         data-aos-duration="900" 
         className='text-5xl text-[#56b6c2] font-bold  my-10 text-center'>SKILLS I HAVE</h1>
        <div  className="flex items-center justify-center  space-x-4">
          {skillsData.map((skill, index) => (
            <div
            data-aos="zoom-out-down"
            data-aos-delay={`${index * 100}`} // Adjust the delay duration as needed
            data-aos-duration="900">
              <Skill skill={skill}/>
              
            </div>
            
          ))}
        </div>
        <div className='my-10 w-11/12 mx-auto grid grid-cols-3 gap-10'>
          {
            skillsData.map((skill, index) =>(
              <div data-aos="zoom-in-down"
              data-aos-delay={`${index * 100}`} // Adjust the delay duration as needed
              data-aos-duration="700">
                <Skilldescription data={skill}/>
              </div>
            ))
          }
        </div>
      </div>
    );
  };
export default Skills