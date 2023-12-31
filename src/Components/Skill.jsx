import React from 'react'

const Skill = (Skill) => {
    const data = Skill.skill;
    const {name, icon, bgColor , textColor ,iconColor, progress} = data;
    console.log(name)
  return (
    <div  >
        <div 
     className={`h-36  w-36 flex flex-col items-center justify-center `}
     style={{
        backgroundColor:bgColor,
        color:textColor,
      }}>
       <h1 className=' text-7xl '>
       {icon }
       </h1>
       <h1 className=' text-3xl'>{name}</h1>
       
    </div>

    </div>
  )
}

export default Skill