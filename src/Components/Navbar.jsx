import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link, animateScroll as scroll } from 'react-scroll';
const Navbar = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionIds = ['home', 'about','skills', 'projects'];
 
  const handleContactScroll = () => {
    const section = document.getElementById('contact');
    if (section) {
      const offset = section.offsetTop - 50;
      scroll.scrollTo(offset, {
        duration: 500,  // adjust the duration as needed
        smooth: 'easeInOutQuart',  // you can adjust the smoothness
      });
    }
  };
 
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const active = sectionIds.find((sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offset = section.offsetTop - 50; // Adjust the offset based on your design
          const height = section.offsetHeight;
          return scrollPosition >= offset && scrollPosition < offset + height;
        }
        return false;
      });

      setActiveSection(active || '');
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sectionIds]);
  return (
    <div data-aos="none" className="navbar sticky top-0 bg-[#1f2229] z-50">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Pulok DAS</a>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className=" flex ">
    {sectionIds.map((sectionId) => (
            <li key={sectionId} className="mx-5 cursor-pointer text-sm font-bold">
              <Link
                to={sectionId}
                spy={true}
                smooth={true}
                duration={500}
                className={`text-xl ${activeSection === sectionId ? 'text-[#61dafb]' : ''}`}
              >
                {sectionId.toUpperCase()}
              </Link>
            </li>
          ))}
      
    </ul>
  </div>
  <div className="navbar-end">
    <button onClick={handleContactScroll} className="btn btn-sm  rounded bg-[#282c34]  text-[#61dafb]  border-[#61dafb]   hover:bg-[#61dafb] hover:text-[#282c34]">CONTACT ME</button>
  </div>
</div>
  )
}

export default Navbar