import ProjectDisplay from "./ProjectDisplay"

const projects = ['Placeholder','Placeholder','Placeholder','Placeholder' ,'Placeholder','Placeholder','Placeholder']
const ProjectsDisplay = ({gradient}) => {
  return (
    <div>
      <div className={`${gradient} text-5xl text-center mt-20 h-20`}> Projects 
        <span className={`${gradient} cursor`}>|</span>
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