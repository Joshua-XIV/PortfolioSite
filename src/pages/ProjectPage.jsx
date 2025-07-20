import { useParams } from "react-router-dom"
import projects from "../projects.json"
import useTypeOnVisible from "../hooks/useTypeOnVisible"
import Carousel from "../components/Carousel"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const gradient = "bg-gradient-to-br from-blue-500 to-green-500 bg-clip-text text-transparent"

const ProjectPage = () => {
  const navigate = useNavigate();
  const {typedText, ref, isDone} = useTypeOnVisible("Info", 100);
  const {name} = useParams();
  console.log(name)
  const project = projects.find(p => p.name === name)

  useEffect(() => {
    if (!project) {
      navigate('/projects', { replace: true });
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div key={project.name} className="text-white flex flex-col justify-center w-full pt-20 appear relative">
      <h1 className="flex justify-center text-6xl font-montserrat font-bold py-10 mb-10 border-b-2 border-white/30">{project.name} </h1>
      <div className="px-4">
        <Carousel imagePaths={project.images}/>
      </div>
      <div>
        <div className="flex flex-wrap items-start space-x-4 space-y-2 mb-10 px-2 justify-center">
          {project.languages.map((lang) => (
            <div key={lang} className="w-auto border-2 bg-white p-2 rounded-2xl text-black">
              {lang}
            </div>
          ))}
        </div>
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
      {/* Source code section below description */}
      {project.source && (
        <div className="flex flex-col items-center mb-10">
          <span className="text-lg font-semibold bg-gradient-to-br from-blue-500 to-green-500 bg-clip-text text-transparent mb-3">Source Code</span>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-2 rounded-full bg-gradient-to-br from-blue-500 to-green-500 text-white font-semibold shadow-md transition-transform duration-200 hover:scale-105"
            aria-label="Source Code"
          >
            <span className="text-xl">&lt;/&gt;</span>
            <span>View Repository</span>
          </a>
        </div>
      )}
    </div>
  )
}

export default ProjectPage