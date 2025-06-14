import React from 'react'
import { useOnScreen } from '../hooks/useOnScreen'
import {FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProjectDisplay = ({name, image, desc, languages}) => {

  return (
    <div className='p-3 relative transition duration-300 hover:scale-105'>
      <div className='gradient-border p-2 rounded-xl space-y-4 bg-white/5 text-white flex flex-col h-full' style={{'--padding' : '2px', '--inset' : "0.75rem"}}>
        <img src={image} alt='Img' className='w-full h-48 object-cover'></img>
        <div className='flex justify-between items-center pb-4 w-full h-auto'>
          <p className='text-3xl'>{name}</p>
          <Link to={`/projects/${name}`} className='border-1 border-white rounded-3xl p-2 relative shine overflow-hidden transition duration-300 hover:scale-105 flex space-x-2 items-center cursor-pointer'>
            <p>Discover</p> <FaArrowRight/>
          </Link>
        </div>
        <div className='text-[14px] text-indigo-200'>{desc}</div>
        <div className='flex flex-wrap space-x-2 space-y-2 mt-auto'>
          {languages.map((lang) => (
            <div className='bg-white text-black rounded p-1 w-fit h-fit text-[14px]'>{lang}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectDisplay