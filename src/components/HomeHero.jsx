import Image from '../assets/react.svg'
import Flag from 'react-world-flags'
import { Link } from 'react-router-dom'
import GithubIcon from '../assets/github-outline.svg?react'
import LinkedInIcon from '../assets/linkedin-outline.svg?react'

const HomeHero = ({name, location, countryCode, githubURL, linkedInURL}) => {
  return (
    <>
    <section className='border-b-1 border-white pb-20 pt-8'>
      <div className='flex flex-col items-center justify-center pt-12'>
        <div className='flex items-center'>
          <img src={Image} alt='Image' className='w-32 h-32'></img>
          <div className='text-white pl-4'>
            <div className='font-bold text-2xl'>
              {name}
            </div>
            <div className='flex'>
              <Flag code={countryCode} width="32" height="28"/>
              <text className='pl-2'>Based in {location}</text>
            </div>
          </div>
        </div>
        <div className='text-white text-7xl md:text-8xl font-bold font-[fira sans]'>
          <div>FULLSTACK</div>
          <div>DEVELOPER</div>
          <div className='flex justify-end space-x-4 mt-2 mr-5'>
            <Link to={githubURL} className='group relative'>
              <GithubIcon className="w-10 h-10 text-white transition-transform duration-150 group-hover:scale-120 group-hover:text-green-300 group-hover:-rotate-15"/>
            </Link>
            <Link to={linkedInURL} className='group relative'>
              <LinkedInIcon className="w-10 h-10 fill-white transition-transform duration-150 group-hover:scale-120 group-hover:fill-green-300 group-hover:-rotate-15"/>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeHero