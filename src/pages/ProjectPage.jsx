import { useParams } from "react-router-dom"
import projects from "../projects.json"

const ProjectPage = () => {
  const {name} = useParams();
  console.log(name)
  const project = projects.find(p => p.name === name)
  return (
    <div className="text-white flex flex-col justify-center w-full pt-20">
      <h1 className="flex justify-center text-6xl font-montserrat font-bold">{project.name} </h1>
      <p>{project.desc}</p>
      <p className="flex space-x-4">
        {project.languages.map((lang) => (
          <div>{lang}</div>
        ))}
      </p>
    </div>
  )
}

export default ProjectPage