import useTypeOnVisible from "../hooks/useTypeOnVisible"

const AboutMe = ({gradient, home = true}) => {
  const {typedText, ref, isDone} =useTypeOnVisible("About Me", 100);
  return (
    <div>
      <div className="px-4">
        <div ref={ref} className={`text-5xl ${gradient} text-center`}>
          {typedText}
          {!isDone && <span className={`text-5xl ${gradient} cursor`}>|</span>}
        </div>
        { home && <div className='justify-center mt-4 text-[19px] text-indigo-200 px-4'>
          I am currently a Computer Science student in my senior year based in the United States. 
          I've built full-stack applications used by real users, developed real-time communication platforms, and implemented data processing pipelines and automation tools. 
          My work has mostly been focused on backend development, database design and optimization, and improving system performance to ensure applications handle real user traffic reliably.
          I also contribute to frontend development, building intuitive interfaces and interactive features to provide a seamless and engaging user experience.
        </div>}
        { !home && <div className='justify-center mt-4 text-[19px] text-indigo-200 px-4'>
          Hello! My name is Joshua but usually just go by Josh.  I'm a big nerd at heart and have a huge love for all things math, science, and gaming related. 
          Whether it's diving into complex equations, or geeking out over cool new tech and games. That curiosity naturally led me to programming, which started as a fun hobby back in high school. 
          Over time, it became something I wanted to pursue more seriously, so I began expanding my skills and diving deeper into the field. 
          I'm currently based in the United States, particularly in the Austin region, and I’m always eager to explore new technologies and continue growing my knowledge.
        </div>}
      </div>
    </div>
  )
}

export default AboutMe