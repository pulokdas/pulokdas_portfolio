import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const Banner = () => {
  
  return (
    <div  className="hero min-h-screen bg-[#1f2229] ">
      <div className="hero-content flex-col lg:flex-row-reverse lg:justify-around  lg:gap-60 ">
        
      <div data-aos="fade-left"  data-aos-duration="900" data-aos-once="false" className="avatar ">
  <div className=" w-60 h-60 md:w-96 md:h-96 rounded-full">
    <img src="https://i.ibb.co/fDRv9MF/1696202549725.jpg" />
  </div>
  </div>
       
        <div >
        <h1  data-aos="fade-right" data-aos-duration="800" className="text-5xl  font-bold">Hi!  </h1>
        <div className='flex gap-5'>
        <h1  data-aos="fade-right" data-aos-duration="800" className="text-5xl  font-bold"> I am <br /> </h1>
        <h1 data-aos="fade-down" data-aos-duration="800" data-aos-delay="200" className="text-5xl  text-[#56b6c2] font-bold"> Pulok Das</h1>
        </div>
        <p   data-aos="fade-up" data-aos-delay="300" data-aos-duration="700" className="pt-6 text-lg">Elevating ideas into digital realms, where imagination meets innovation.</p>
           
        </div>
      </div>
    </div>
  );
}

export default Banner;
