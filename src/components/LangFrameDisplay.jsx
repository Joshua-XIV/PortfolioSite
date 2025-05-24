import React from 'react'

const LangFrameDisplay = ({imagePath, name}) => {
  return (
    <section className='border-green-500 border-2 rounded-xl shadow-md relative px-4 py-2'>
      <div className='text-white flex space-x-4 items-center'>
        <img src={imagePath} alt={name} className='w-15 h-15'></img>
        <text className='text-indigo-200 text-4xl sm:text-2xl md:text-[16px]'>{name}</text>
      </div>
    </section>
  )
}

export default LangFrameDisplay