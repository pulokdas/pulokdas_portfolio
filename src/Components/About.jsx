import React from 'react';

const About = () => {
  return (
    <div className="pb-12  text-white">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <div className="">
       
         
          <div className=' space-y-3 '>
            <p className="text-xl ">
              Hey there! I'm Pulok Das, a passionate full-stack MERN web developer based in Bangladesh. I thrive on turning ideas into reality through the art of coding.
            </p>
            <p className="text-xl ">
              My journey involves crafting seamless and interactive web experiences. From designing elegant user interfaces with React to building powerful server-side applications with Node.js and MongoDB, I embrace the full stack to create holistic solutions.
            </p>
            <p className="text-xl ">
              With a keen eye for detail and a love for clean code, I am committed to delivering high-quality and scalable projects. I enjoy staying up-to-date with the latest technologies and trends in the ever-evolving world of web development.
            </p>
            <p className="text-xl">
              Let's collaborate and bring your digital vision to life! Whether it's a web application, e-commerce platform, or anything in between, I'm ready to take on new challenges and create meaningful experiences.
            </p>
          </div>
        </div>
        <div className="">
          <p className="text-lg">
            Connect with me on
            <a href="https://linkedin.com/in/your-linkedin-profile" className="text-blue-400 ml-1 hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            and
            <a href="https://github.com/your-github-profile" className="text-blue-400 ml-1 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
            to explore more about my projects and contributions.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
