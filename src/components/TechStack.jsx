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
import useTypeOnVisible from "../hooks/useTypeOnVisible"
import { useOnScreen } from "../hooks/useOnScreen";

const languages = [
  { image: CPlusPlusLogo, name: "C++" },
  { image: CSharpLogo, name: "C#" },
  { image: PythonLogo, name: "Python" },
  { image: LuaLogo, name: "Lua" },
  { image: ReactLogo, name: "React" },
  { image: NodeJSLogo, name: "NodeJS" },
  { image: JavaScriptLogo, name: "JavaScript" },
  { image: TypeScriptLogo, name: "TypeScript" },
  { image: TailwindCSSLogo, name: "TailwindCSS" },
  { image: CSSLogo, name: "CSS" },
  { image: HTMLLogo, name: "HTML" },
];

const TechStack = ({gradient}) => {
  const {typedText, ref, isDone} =useTypeOnVisible("TechStack", 100);
  const [languageRef, isVisible] = useOnScreen(0.2);
  return (
    <>
      <div  ref={ref} className={`mt-20 mb-10 text-5xl text-center ${gradient}`}>{typedText}
        {!isDone && <span className={`text-5xl ${gradient} cursor`}>|</span>}
      </div>
      <div ref={languageRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
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