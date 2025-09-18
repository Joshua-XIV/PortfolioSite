const Experience = ({company, role, startDate, endDate = "Present", description, imagePath, scale = 100}) => {
  if (endDate === "") 
    endDate = "Present"

  const size = `${scale}%`

  return (
    <section className='px-4 py-2'>
      <div className='text-white flex space-x-4 items-center'>
        <div
          className="w-15 h-15 rounded-full bg-white bg-center bg-no-repeat bg-cover border-green-500 border-2 overflow-hidden flex-shrink-0"
          style={{ backgroundImage: `url(${imagePath})`, backgroundSize: size }}
        ></div>
        <div className="flex flex-col">
          <span className="text-indigo-200 text-[14px]">{startDate} - {endDate}</span>
          <span className="text-white text-[20px] font-bold">{company}</span>
          <span className="text-white text-[14px] italic">{role}</span>
          <ul className="text-indigo-200 text-sm list-disc list-outside mt-1 space-y-1 pl-5">
            {description.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Experience