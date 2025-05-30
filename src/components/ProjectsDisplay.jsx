import ProjectDisplay from "./ProjectDisplay"
import useTypeOnVisible from "../hooks/useTypeOnVisible"
import QuickRoom from "../assets/quickroomhome.jpg"
import projects from "../projects.json"

const projectImages = [QuickRoom, QuickRoom]

const ProjectsDisplay = ({gradient}) => {
  const {typedText, ref, isDone} = useTypeOnVisible("Projects", 100)
  return (
    <div>
      <div ref={ref} className={`${gradient} text-5xl text-center mt-20 h-20`}> {typedText} 
        {!isDone && <span className={`text-5xl ${gradient} cursor`}>|</span>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {projects.map(({name, desc, languages}, index) => (
          <ProjectDisplay key={index} name={name} image={projectImages[index]} desc={desc} languages={languages}></ProjectDisplay>
        ))}
      </div>
    </div>
  )
}

export default ProjectsDisplay