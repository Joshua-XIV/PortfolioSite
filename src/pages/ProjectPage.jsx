import { useParams } from "react-router-dom"
import projects from "../projects.json"
import useTypeOnVisible from "../hooks/useTypeOnVisible"
import Carousel from "../components/Carousel"

const gradient = "bg-gradient-to-br from-blue-500 to-green-500 bg-clip-text text-transparent"

const ProjectPage = () => {
  const {typedText, ref, isDone} = useTypeOnVisible("Info", 100);
  const {name} = useParams();
  console.log(name)
  const project = projects.find(p => p.name === name)
  return (
    <div key={project.name} className="text-white flex flex-col justify-center w-full pt-20 appear">
      <h1 className="flex justify-center text-6xl font-montserrat font-bold py-10 mb-10 border-b-2 border-white/30">{project.name} </h1>
      <Carousel imagePaths={project.images}/>
      <div className="flex justify-center space-x-4 mb-10">
        {project.languages.map((lang) => (
          <div key={lang} className="w-auto border-2 bg-white p-2 rounded-2xl text-black">
            {lang}
          </div>
        ))}
      </div>
      <h2 ref={ref} className={`flex justify-center text-4xl ${gradient}`}>{typedText} {!isDone && <span className={`text-4xl ${gradient} cursor`}>|</span>}</h2>
      <div className="flex justify-center items-center p-2 mb-10">
        <div className="w-xl md:w-4xl p-4 rounded-2xl text-indigo-200">
          {project.longDesc.split('\n').map((line, idx) => {
            const parts = line.split(/(<b>.*?<\/b>)/g);
            return (
              <p key={idx} className="mb-4">
                {parts.map((part, i) => {
                  if (part.startsWith('<b>') && part.endsWith('</b>')) {
                    return <strong key={i}>{part.slice(3, -4)}</strong>;
                  }
                  return <span key={i}>{part}</span>;
                })}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage