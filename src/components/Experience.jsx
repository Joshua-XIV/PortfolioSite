import useMediaQuery from "../hooks/useMediaQuery"

const Experience = ({ company, role, startDate, endDate, description, shortDescription, imagePath, scale = 100 }) => {
  const size = `${scale}%`

  return (
    <section className="px-4 py-2">
      <div className="text-white flex space-x-4 items-center">
        <div
          className="w-16 h-16 shrink-0 rounded-full bg-white bg-center bg-no-repeat bg-cover border-green-500 border-2 overflow-hidden"
          style={{ backgroundImage: `url(${imagePath})`, backgroundSize: size }}>
        </div>
        <div className="flex flex-col">
          <span className="text-indigo-200 text-xs sm:text-sm md:text-[14px]">{startDate} - {endDate}</span>
          <span className="text-white text-lg sm:text-xl md:text-[20px]">{company}</span>
          <span className="text-indigo-200 text-xs sm:text-sm md:text-[14px]">{role}</span>
        </div>
      </div>

      <ul className="exp-short-desc mt-2 pl-24 pr-2 list-disc text-indigo-100 text-sm space-y-1">
        {shortDescription.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>

      <ul className="exp-full-desc mt-2 pl-24 pr-2 list-disc text-indigo-100 text-[13px] space-y-1">
        {description.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </section>
  )
}

export default Experience