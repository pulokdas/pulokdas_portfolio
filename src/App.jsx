import React from 'react'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import About from './Components/About'
import Skills from './Components/Skills'
import Experiment from './Components/experiment'

const App = () => {
  return (
    <div className='  bg-[#1f2229] text-[#d8dee9]'>
      <Navbar/>
      <Banner/>
     <Skills/>
     
    </div>
  )
}

export default App