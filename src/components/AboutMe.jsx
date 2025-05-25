import useTypeOnVisible from "../hooks/useTypeOnVisible"

const AboutMe = ({gradient}) => {
  const {typedText, ref} =useTypeOnVisible("About Me", 100);
  return (
    <div>
      <div>
        <div ref={ref} className={`text-5xl ${gradient} text-center`}>
          {typedText}
          <span className={`text-5xl ${gradient} cursor`}>|</span>
        </div>
        <div className='justify-center mt-4 text-[19px] text-indigo-200'>
          I am currently an undergraduate student pursuing my B.S CS degree.
          I'm always trying to learn new things and improve my skills. 
          I enjoy solving problems and exploring different areas of technology to better understand how things work. 
          My goal is to keep growing so I can build useful and meaningful projects in the future.
        </div>
      </div>
    </div>
  )
}

export default AboutMe