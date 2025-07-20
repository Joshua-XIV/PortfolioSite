import ProjectDisplay from "./ProjectDisplay"
import useTypeOnVisible from "../hooks/useTypeOnVisible"
import projects from "../projects.json"
import { Link } from "react-router-dom";

const imageMap = import.meta.glob("../assets/*", {
  eager: true,
  import: "default",
});

const ProjectsDisplay = ({gradient, home = true}) => {
  const {typedText, ref, isDone} = useTypeOnVisible("Projects", 100)
  // Only show first 4 projects on home
  const displayedProjects = home ? projects.slice(0, 4) : projects;
  return (
    <div>
      <div ref={ref} className={`${gradient} text-5xl text-center mt-20 h-20`}> {typedText} 
        {!isDone && <span className={`text-5xl ${gradient} cursor`}>|</span>}
      </div>
      {!home && 
      <div className={`text-xl text-center ${gradient}`}>
        More Coming Soon...
      </div>}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {displayedProjects.map(({name, images, desc, languages, source}, index) => {
          const firstImage = images[0];
          const resolvedImage = imageMap[`../assets/${firstImage}`];
          return (
          <ProjectDisplay key={index} name={name} image={resolvedImage} desc={desc} languages={languages} source={source}></ProjectDisplay>
          )
        })}
      </div>
      {/* View More button for home page */}
      {home && (
        <div className="flex justify-center mt-8">
          <Link to="/projects" className="px-6 py-3 bg-gradient-to-br from-blue-500 to-green-500 text-white rounded-full text-lg font-semibold shadow-md transition-transform duration-200 hover:scale-105">
            View More
          </Link>
        </div>
      )}
    </div>
  )
}

export default ProjectsDisplay