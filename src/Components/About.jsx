import React from 'react';

const About = () => {
  return (
    <div data-aos="fade-up" data-aos-delay="200"
    data-aos-duration="800" className="p-12  text-white">
      <div className="w-11/12 mx-auto flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <div className="">
       
         
          <div className=' flex items-center gap-10 space-y-3 text-justify '>
            <div>
            <img src="https://i.ibb.co/fDRv9MF/1696202549725.jpg" className="max-w-sm rounded-lg shadow-2xl" />
            </div>
          <p className="text-xl ">
            Hey there! I'm Pulok Das, a passionate full-stack MERN web developer hailing from the picturesque landscapes of Bangladesh. My love for technology and the art of coding drives me to turn imaginative ideas into functional and elegant digital solutions.

In my journey, I've honed my skills in crafting seamless and interactive web experiences. I find joy in the intricate process of designing user interfaces with React, bringing creativity to the forefront. Simultaneously, my expertise extends to the backend, where I wield the power of Node.js and MongoDB to build robust server-side applications.

What sets me apart is my commitment to the entire development spectrum—the full stack. I believe in creating holistic solutions that not only meet functional requirements but also deliver a delightful user experience. With a keen eye for detail, I ensure that every line of code contributes to the overall quality and scalability of the projects I undertake.

Clean code isn't just a practice for me; it's a philosophy. I am dedicated to producing code that is not only efficient but also easy to understand and maintain. This commitment reflects my belief that technology should be an enabler, making the digital world accessible and enjoyable.

Staying abreast of the latest technologies and trends is not just a habit; it's a passion. The ever-evolving landscape of web development fascinates me, and I take pleasure in learning and implementing the cutting-edge tools and methodologies.

Let's collaborate and breathe life into your digital vision! Whether you envision a dynamic web application, a sophisticated e-commerce platform, or anything in between, I am ready to take on new challenges and create meaningful experiences. Join me on this exciting journey, and together, we can make your digital aspirations a reality!
            </p>
            
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default About;
