import ProjectDisplay from "./ProjectDisplay"
import useTypeOnVisible from "../hooks/useTypeOnVisible"

const projects = ['Placeholder','Placeholder','Placeholder','Placeholder' ,'Placeholder','Placeholder','Placeholder']
const ProjectsDisplay = ({gradient}) => {
  const {typedText, ref, isDone} = useTypeOnVisible("Projects", 100)
  return (
    <div>
      <div ref={ref} className={`${gradient} text-5xl text-center mt-20 h-20`}> {typedText} 
        {!isDone && <span className={`text-5xl ${gradient} cursor`}>|</span>}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {projects.map((name, index) => (
          <ProjectDisplay key={index} name={name} index={index}></ProjectDisplay>
        ))}
      </div>
    </div>
  )
}

export default ProjectsDisplay