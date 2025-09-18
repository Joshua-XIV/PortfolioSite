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
import GrafanaLogo from "../assets/grafana.svg"
import RubyLogo from "../assets/ruby.svg"
import RubyOnRailsLogo from "../assets/rubyrails.svg"
import GitLogo from "../assets/Git.svg"
import DotNetLogo from "../assets/dotnet.svg"
import PowerShellLogo from "../assets/Powershell.svg"
import BashLogo from "../assets/Bash.svg"
import useTypeOnVisible from "../hooks/useTypeOnVisible"
import { useOnScreen } from "../hooks/useOnScreen";
import { useState, useEffect } from "react";

const languages = [
  // Languages
  { image: CPlusPlusLogo, name: "C++" },
  { image: CSharpLogo, name: "C#" },
  { image: DotNetLogo, name: ".NET" },
  { image: PythonLogo, name: "Python" },
  { image: FastApiLogo, name: "FastAPI" },
  { image: RubyLogo, name: "Ruby" },
  { image: RubyOnRailsLogo, name: "Ruby on Rails" },

  // JS/TS
  { image: JavaScriptLogo, name: "JavaScript" },
  { image: TypeScriptLogo, name: "TypeScript" },
  { image: ReactLogo, name: "React" },
  { image: NodeJSLogo, name: "NodeJS" },


  { image: MySQLLogo, name: "MySQL" },
  { image: PostgreSQLLogo, name: "PostgreSQL" },
  { image: GrafanaLogo, name: "Grafana" },

  // DevOps / Cloud
  { image: DockerLogo, name: "Docker" },
  { image: KubernetesLogo, name: "Kubernetes" },
  { image: AWSLogo, name: "AWS" },
  { image: GitLogo, name: "Git" },
  { image: PowerShellLogo, name: "PowerShell" },
  { image: BashLogo, name: "Bash" },

  // Other 
  { image: TailwindCSSLogo, name: "TailwindCSS" },
  { image: CSSLogo, name: "CSS" },
  { image: HTMLLogo, name: "HTML" },
  { image: LuaLogo, name: "Lua" },
];

const TechStack = ({gradient}) => {
  const {typedText, ref, isDone} =useTypeOnVisible("TechStack", 100);
  const [languageRef, isVisible] = useOnScreen(0.2);
  const [visibleCount, setVisibleCount] = useState(6);
  const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 640;
  const visibleLanguages = isSmallScreen ? languages.slice(0, visibleCount) : languages;

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, languages.length));
  };

  return (
    <>
      <div ref={ref} className={`mt-20 mb-10 text-5xl text-center ${gradient}`}>
        {typedText}
        {!isDone && <span className={`text-5xl ${gradient} cursor`}>|</span>}
      </div>

      <div
        ref={languageRef}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-2 overflow-hidden"
      >
        {visibleLanguages.map(({ image, name }, index) => (
          <LangFrameDisplay
            key={name}
            imagePath={image}
            name={name}
            index={index}
            triggerAnimation={isVisible}
          />
        ))}
      </div>

      {isSmallScreen && visibleCount < languages.length && (
        <div className="text-center mt-4">
          <button
            onClick={handleViewMore}
            className="px-6 py-3 bg-gradient-to-br from-blue-500 to-green-500
                       text-white rounded-full text-lg font-semibold shadow-md 
                       transition-transform duration-200 hover:scale-105 cursor-pointer"
          >
            View More
          </button>
        </div>
      )}
    </>
  );
}

export default TechStack