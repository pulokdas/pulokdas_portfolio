import React from 'react'
import { IconBase } from 'react-icons';

const Skilldescription = ({data}) => {
    const {name ,icon, bgColor,textColor , description} = data;
    console.log(description);
  return (
    <div className='p-5 bg-white rounded-md shadow-md bg-opacity-5 '>
        <div className='' >
       
                <h1 className=' flex gap-2 items-center justify-center text-3xl'><span style={{background: bgColor, color:textColor}}>{icon}</span>{name}</h1>
            <ul className=' pl-10  list-disc'>
            {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
            </ul>
       
        </div>
        </div>
  )
}

export default Skilldescription