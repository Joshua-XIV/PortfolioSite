import React from 'react'
import { useOnScreen } from '../hooks/useOnScreen'

const ProjectDisplay = ({name, index}) => {

  return (
    <div className='p-2 relative'>
      <div className='border-green-500 border-2 rounded-xl p-2 space-y-10 bg-white/5 text-white'>
        {name} {index}
      </div>
    </div>
  )
}

export default ProjectDisplay