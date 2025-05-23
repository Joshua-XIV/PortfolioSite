import Image from '../assets/react.svg'
import Flag from 'react-world-flags'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa6'

const HomeHero = ({name, location, countryCode, githubURL, linkedInURL}) => {
  return (
    <>
    <section className='border-b-1 border-blue-500 pb-20'>
      <div className='flex flex-col items-center justify-center pt-12'>
        <div className='flex items-center'>
          <img src={Image} alt='Josh Image' className='w-32 h-32'></img>
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
        <div className='text-white text-5xl md:text-8xl font-bold font-[fira sans]'>
          <div>FULLSTACK</div>
          <div>DEVELOPER</div>
          <div className='flex justify-end space-x-4 mt-2 mr-5'>
            <Link to={githubURL}>
              <FaGithub className='h-10 w-10'/> 
            </Link>
            <Link to={linkedInURL}>
              <FaLinkedin className='h-10 w-10'/>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeHero