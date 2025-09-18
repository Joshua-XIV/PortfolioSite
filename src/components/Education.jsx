const Education = ({name, degreeType, degreeMajor, startingDate, endingDate = "Present", imagePath, scale = 100}) => {
  if (endingDate == "")
    endingDate = "Present"

  const size = `${scale}%`

  return (
    <section className='px-4 py-2'>
      <div className='text-white flex space-x-4 items-center'>
        <div 
          className="w-15 h-15 rounded-full bg-white bg-center bg-no-repeat bg-cover border-green-500 border-2 overflow-hidden"
          style={{ backgroundImage: `url(${imagePath})`, backgroundSize: size }}>
        </div>
        <div className="flex flex-col">
          <span className='text-indigo-200 text-2xl sm:text-2xl md:text-[14px]'>{startingDate} - {endingDate}</span>
          <span className='text-white text-2xl sm:text-2xl md:text-[20px]'>{name}</span>
          <span className='text-indigo-200 text-2xl sm:text-2xl md:text-[14px]'>{degreeType} in {degreeMajor}</span>
        </div>
      </div>
    </section>
  )
}

export default Education