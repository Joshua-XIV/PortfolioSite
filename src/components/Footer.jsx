import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({gradient, firstName, LastName, githubLink, linkedInLink}) => {
  return (
    <section className='mx-auto md:w-3xl lg:w-4xl mt-20 mb-20 appear'>
      <div className='flex justify-center items-center border-green-500 border-2 rounded-xl py-5'>
        <div className='flex flex-row w-full space-x-8'>

          {/* Name Section */}
          <div className={`flex flex-col text-5xl font-bold font-[fira sans] ${gradient} flex-[6] pl-5`}>
            <div>{firstName}</div>
            <div>{LastName}</div>
          </div>

          {/* Socials*/}
          <div className='flex-1 px-2'>
            <div className=' text-white pb-3 font-[open sans]'>Socials</div>
            <div className='flex flex-col text-indigo-200 w-fit'>
              <Link to={githubLink} className='hover:underline'>GitHub</Link>
              <Link to={linkedInLink} className='hover:underline'>LinkedIn</Link>
              <Link onClick={ () => window.location = 'mailto:josh.hdz956@yahoo.com'} className='hover:underline'>Email</Link>
            </div>
          </div>

          {/* Explore*/}
          <div className='flex-1 px-2'>
            <div className=' text-white pb-3 '>Explore</div>
            <div className='flex flex-col text-indigo-200 w-fit'>
              <Link to='/' className='hover:underline'>Home</Link>
              <Link to='/projects' className='hover:underline'>Projects</Link>
              <Link to='/about' className='hover:underline'>About</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer