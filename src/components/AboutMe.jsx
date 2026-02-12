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
          <p className="pb-4">
            Hello! My name is Joshua, but I usually go by Josh.
            I'm a big nerd at heart with a huge love for all things math, science, and gaming.
            Whether it's diving into complex equations or geeking out over new technology and games, that curiosity naturally led me to programming, which started as a fun hobby back in high school.
            Over time, it became something I wanted to pursue more seriously, so I began expanding my skills and exploring different areas of software development.
            I'm currently based in the United States, particularly in the Austin region.
          </p>
          <p>
            I've worked on building full-stack applications, real-time communication platforms, and data processing pipelines.
            My experience spans backend development, database design and optimization, and improving system performance to ensure applications run reliably under real-world usage.
            I also contribute to frontend development, creating intuitive interfaces and interactive features to provide a seamless user experience.
            I'm particularly interested in systems design, scalable architectures, and the intersection of performance, maintainability, and usability in software.
            Beyond coding, I enjoy analyzing problems from multiple angles, breaking down complex challenges into manageable components, and continuously refining my solutions.
            I aim to build software that works well for users and stands up under real-world usage.
          </p>
        </div>}
      </div>
    </div>
  )
}

export default AboutMe