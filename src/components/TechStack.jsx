import LangFrameDisplay from "./LangFrameDisplay"
import CPlusPlusLogo from "../assets/cplusplus.svg";
import CSharpLogo from "../assets/csharp.svg";
import PythonLogo from "../assets/python.svg";
import LuaLogo from "../assets/lua.svg";
import ReactLogo from "../assets/react.svg";
import NodeJSLogo from "../assets/nodejs.svg";
import JavaScriptLogo from "../assets/javascript.svg";
import TypeScriptLogo from "../assets/typescript.svg";
import TailwindCSSLogo from "../assets/tailwindcss.svg";
import CSSLogo from "../assets/csslogo.svg";
import HTMLLogo from "../assets/html.svg";
import MySQLLogo from "../assets/mysql.svg"
import PostgreSQLLogo from "../assets/postgresql.svg"
import SwiftLogo from "../assets/swift.svg"
import FastApiLogo from "../assets/FastAPI.svg"
import DockerLogo from "../assets/docker.svg"
import KubernetesLogo from "../assets/kubernetes.svg"
import AWSLogo from "../assets/aws.svg"
import useTypeOnVisible from "../hooks/useTypeOnVisible"
import { useOnScreen } from "../hooks/useOnScreen";

const languages = [
  { image: CPlusPlusLogo, name: "C++" },
  { image: CSharpLogo, name: "C#" },
  { image: SwiftLogo, name: "Swift"},
  { image: PythonLogo, name: "Python" },
  { image: FastApiLogo, name: "FastAPI"},
  { image: LuaLogo, name: "Lua" },
  { image: ReactLogo, name: "React" },
  { image: NodeJSLogo, name: "NodeJS" },
  { image: JavaScriptLogo, name: "JavaScript" },
  { image: TypeScriptLogo, name: "TypeScript" },
  { image: TailwindCSSLogo, name: "TailwindCSS" },
  { image: CSSLogo, name: "CSS" },
  { image: HTMLLogo, name: "HTML" },
  { image: MySQLLogo, name: "MySQL"},
  { image: PostgreSQLLogo, name: "PostgreSQL"},
  { image: DockerLogo, name: "Docker"},
  { image: KubernetesLogo, name: "Kubernetes"},
  { image: AWSLogo, name: "AWS"}
];

const TechStack = ({gradient}) => {
  const {typedText, ref, isDone} =useTypeOnVisible("TechStack", 100);
  const [languageRef, isVisible] = useOnScreen(0.2);
  return (
    <>
      <div  ref={ref} className={`mt-20 mb-10 text-5xl text-center ${gradient}`}>{typedText}
        {!isDone && <span className={`text-5xl ${gradient} cursor`}>|</span>}
      </div>
      <div ref={languageRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-2 overflow-hidden">
        {languages.map(({image, name}, index) => (
          <LangFrameDisplay 
            key={name} 
            imagePath={image} 
            name={name}
            index={index}
            triggerAnimation={isVisible}
          />
        ))}
      </div>
    </>
  )
}

export default TechStack