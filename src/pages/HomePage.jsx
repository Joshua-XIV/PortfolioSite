import HomeHero from "../components/HomeHero"
import AboutMe from "../components/AboutMe"
import TechStack from "../components/TechStack"
import Educations from "../components/Educations"
import ProjectsDisplay from "../components/ProjectsDisplay"
import Experiences from "../components/Experiences"

const HomePage = ({gradient}) => {
  return (
    <>
      <div>
        <HomeHero
        name="Joshua Hernandez"
        location="United States"
        countryCode="US"
        githubURL="https://github.com/Joshua-XIV"
        linkedInURL="https://www.linkedin.com/in/joshua956/"/>
        <div className="mx-auto md:w-3xl lg:w-4xl mt-20 mb-20 appear">
          <AboutMe gradient={gradient}/>
          <Experiences gradient={gradient}/>
          <Educations gradient={gradient}/>
          <TechStack gradient={gradient}/>
          <ProjectsDisplay gradient={gradient}/>
        </div>
      </div>
    </>
  )
}

export default HomePage