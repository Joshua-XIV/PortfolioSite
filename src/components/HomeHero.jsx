import Image from '../assets/react.svg'
import Flag from 'react-world-flags'

const HomeHero = ({name, location, countryCode}) => {
  return (
    <>
    <section>
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
        </div>
      </div>
    </section>
    </>
  )
}

export default HomeHero