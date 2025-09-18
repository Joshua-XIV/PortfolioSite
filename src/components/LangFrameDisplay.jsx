import React, { useEffect, useState } from 'react'

const LangFrameDisplay = ({imagePath, name, index, triggerAnimation, delay = 125}) => {
  const [delayVisible, setDelayVisible] = useState(false);
  const delayStyle = `duration-${delay}`
  useEffect(() => {
    if (triggerAnimation) {
      const timeout =setTimeout(() => {
        setDelayVisible(true);
      }, index * delay);

      return () => clearTimeout(timeout);
    }
  }, [triggerAnimation, index]);

  return (
    <section
    className={`border-green-500 border-2 rounded-xl shadow-md relative 
    px-4 py-2 transform transition-transform ${delayStyle} ease-in-out opacity-0
    ${delayVisible ? "opacity-100 translate-x-0 translate-y-0" : (index % 2 === 0 ? "-translate-x-24 translate-y-24" : "translate-x-24 -translate-y-24")}
    sm:hover:scale-105 md:hover:scale-110`}>
      <div className='text-white flex space-x-4 items-center'>
        <img src={imagePath} alt={name} className='w-15 h-15'></img>
        <span className='text-indigo-200 text-4xl sm:text-2xl md:text-[16px]'>{name}</span>
      </div>
    </section>
  )
}

export default LangFrameDisplay