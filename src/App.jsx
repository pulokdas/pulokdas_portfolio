import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Skills from './Components/Skills'

import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='  bg-[#1f2229] text-[#d8dee9]'>
      <Navbar/>
      <Banner/>
      <About/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
    </div>
  )
}

export default App