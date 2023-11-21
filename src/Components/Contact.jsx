import React from 'react'

import { FaLinkedin , FaGithub, FaFacebookSquare ,FaInstagramSquare
} from "react-icons/fa";
import { Link } from 'react-router-dom';
const Contact = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
    <div className='flex  justify-around gap-10'>
    <div class="relative flex flex-col rounded-xl bg-transparent bg-clip-border  text-center  shadow-none">
      <h4 class="text-[#61dafb] block font-sans text-2xl font-semibold leading-snug tracking-normal  antialiased">
       SEND ME EMAIL
      </h4>
     
      <form  class="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div class="mb-4 flex flex-col gap-6">
          <div class="relative h-11 w-full min-w-[200px]">
            <input
              class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#61dafb] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeHolder=" "
              name='name'
            />
            <label class=" text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#61dafb] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#61dafb] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#61dafb] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Name
            </label>
          </div>
          <div class="relative h-11 w-full min-w-[200px]">
            <input
              class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#61dafb] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeHolder=" "
              name='email'
            />
            <label class=" text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#61dafb] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#61dafb] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#61dafb] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Email
            </label>
          </div>
          <div class="relative h-11 w-full min-w-[200px]">
            <textarea
              type="text"
              class="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-10 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-[#61dafb] focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
              placeHolder=" "
              name='Message'
            
            />
            <label class=" text-gray-400 before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-[#61dafb] peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-[#61dafb] peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-[#61dafb] peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Message
            </label>
          </div>
        
        </div>
       
        <button
          class="mt-16 block w-full  select-none rounded-lg bg-[#61dafb] py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-[#edac07]-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="submit"
          data-ripple-light="true"
        >
          SUBMIT
        </button>
        
       
      </form>
    </div>
    <div className='bg-[#61dafb] h-96 w-1'>
.
    </div>
    <div className='h-96'>
        <h1 className=' text-[#61dafb] text-center mb-8 block font-sans text-2xl'>CONNECT ON SOCIAL MEDIA</h1>
        <div className='flex flex-col gap-4'>
            <Link to='https://www.linkedin.com/in/pulok-das/' target='blank' className='btn btn-block mb-1   rounded  text-[#ffff]  border-[#0077B5] bg-[#0077B5]   hover:bg-[#61dafb] hover:text-[#282c34]'>
            <button className='flex gap-1 text-lg items-center'><FaLinkedin /> LINKEDIN</button></Link>
            <Link to='https://github.com/pulokdas' target='blank' className='btn btn-block mb-1   rounded bg-[#282c34]  text-white  border-white   hover:bg-[#61dafb] hover:text-[#282c34]'>
            <button className='flex gap-1 text-lg items-center' ><FaGithub /> GITHUB</button></Link>
            <Link to='https://www.facebook.com/pulokdas01/' target='blank' className='btn btn-block mb-1   rounded bg-[#282c34]  text-[#1877f2]  border-[#1877f2]   hover:bg-[#61dafb] hover:text-[#282c34]'>
            <button className='flex gap-1 text-lg items-center' ><FaFacebookSquare/> FACEBOOK</button></Link>
            <Link to='https://www.instagram.com/_pulok_das/' target='blank' className='btn btn-block mb-1   rounded bg-[#282c34]  text-[#dd2a7b]  border-[#dd2a7b]   hover:bg-[#61dafb] hover:text-[#282c34]'>
            <button className='flex gap-1 text-lg items-center'><FaInstagramSquare />
INSTAGRAM</button></Link>
        </div>
    </div>
    </div>
  </div>
  )
}

export default Contact