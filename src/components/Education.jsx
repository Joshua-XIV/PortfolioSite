import { abbreviateDate } from "../utils/dates"

const Education = ({ name, degreeType, degreeMajor, startingDate, endingDate = "Present", imagePath, scale = 100 }) => {
  if (endingDate == "")
    endingDate = "Present"

  const size = `${scale}%`

  return (
    <section className='px-4 py-2'>
      <div className='text-white flex space-x-4 items-center'>
        <div
          className="w-16 h-16 shrink-0 rounded-full bg-white bg-center bg-no-repeat bg-cover border-green-500 border-2 overflow-hidden"
          style={{ backgroundImage: `url(${imagePath})`, backgroundSize: size }}>
        </div>
        <div className="flex flex-col">
          <span className="text-indigo-200 text-xs sm:text-sm md:text-[14px]">
            <span className="sm:hidden">{abbreviateDate(startingDate)} - {abbreviateDate(endingDate)}</span>
            <span className="hidden sm:inline">{startingDate} - {endingDate}</span>
          </span>
          <span className='text-white text-lg sm:text-xl md:text-[20px]'>{name}</span>
          <span className='text-indigo-200 text-xs sm:text-sm md:text-[14px]'>{degreeType} in {degreeMajor}</span>
        </div>
      </div>
    </section>
  )
}

export default Education