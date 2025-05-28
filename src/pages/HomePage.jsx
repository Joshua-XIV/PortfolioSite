import HomeHero from "../components/HomeHero"
import AboutMe from "../components/AboutMe"
import TechStack from "../components/TechStack"
import Educations from "../components/Educations"
import ProjectsDisplay from "../components/ProjectsDisplay"

const gradient = "bg-gradient-to-br from-blue-500 to-green-500 bg-clip-text text-transparent"
const HomePage = () => {
  return (
    <>
      <HomeHero 
      name="Joshua Hernandez" 
      location="United States" 
      countryCode="US"
      githubURL="https://github.com/Joshua-XIV"
      linkedInURL="https://www.linkedin.com/in/joshua956/"/>
      <div className="mx-auto md:w-3xl lg:w-4xl mt-20 mb-20">
        <AboutMe gradient={gradient}/>
        <TechStack gradient={gradient}/>
        <Educations gradient={gradient}/>
        <ProjectsDisplay gradient={gradient}/>
      </div>
    </>
  )
}

export default HomePage