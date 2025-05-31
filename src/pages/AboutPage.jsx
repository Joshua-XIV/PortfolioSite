import AboutMe from "../components/AboutMe"
import useTypeOnVisible from "../hooks/useTypeOnVisible";

const AboutPage = ({gradient}) => {
  const {typedText, ref, isDone} = useTypeOnVisible("About Me", 100);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className={`w-4xl mt-30`}>
        <AboutMe gradient={gradient} home={false}/>
      </div>
    </div>
  )
}

export default AboutPage