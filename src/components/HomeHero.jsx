import Image from '../assets/me1.jpg'
import Flag from 'react-world-flags'
import Resume from '../assets/JoshHdzFullResume.pdf'
import GithubIcon from '../assets/github-outline.svg?react'
import LinkedInIcon from '../assets/linkedin-outline.svg?react'
import CVIcon from '../assets/cv.svg?react'

const HomeHero = ({name, location, countryCode, githubURL, linkedInURL}) => {
  return (
    <>
    <section className='border-b-1 border-white/30 pb-20 pt-8'>
      <div className='flex flex-col items-center justify-center pt-12'>
        <div className='flex items-center'>
          <div
            className="w-32 h-32 border-2 border-white rounded-full bg-center bg-no-repeat bg-cover go-right"
            style={{ backgroundImage: `url(${Image})`, backgroundSize: '90%' }}
          />
          <div className='text-white pl-4'>
            <div className='font-bold text-2xl go-down' style={{'--animation-delay': '0.15s' }}>
              {name}
            </div>
            <div className='flex go-left' style={{'--animation-delay': '0.3s' }}>
              <Flag code={countryCode} width="32" height="28"/>
              <span className='pl-2'>Based in {location}</span>
            </div>
          </div>
        </div>
        <div className='text-white text-6xl sm:text-7xl md:text-8xl font-bold font-[fira sans]'>
          <div className='go-up' style={{'--animation-delay': '0.45s' }}>FULLSTACK</div>
          <div className='go-right' style={{'--animation-delay': '0.6s' }}>DEVELOPER</div>
          <div className='flex justify-end space-x-4 mt-2 mr-5 items-center'>
            <a href={githubURL} target="_blank" rel="noopener noreferrer" className='group relative'>
              <GithubIcon 
                className="w-10 h-10 text-white transition-transform duration-150 group-hover:scale-120 group-hover:text-green-300 group-hover:-rotate-15 go-up overflow-hidden"
                style={{'--animation-delay': '0.75s' }}
              />
            </a>
            <a href={linkedInURL} target="_blank" rel="noopener noreferrer" className='group relative'>
              <LinkedInIcon 
                className="w-10 h-10 fill-white transition-transform duration-150 group-hover:scale-120 group-hover:fill-green-300 group-hover:-rotate-15 go-left"
                style={{'--animation-delay': '0.90s' }}
              />
            </a>
            <a href={Resume} target="_blank" rel="noopener noreferrer" className='group relative'>
              <CVIcon 
                className="w-9 h-9 fill-white transition-transform duration-150 group-hover:scale-120 group-hover:fill-green-300 group-hover:-rotate-15 go-down"
                style={{'--animation-delay': '1.05s' }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeHero