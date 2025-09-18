import Education from "./Education"
import ACCLogo from "../assets/accLogo.png"
import OregonLogo from "../assets/oregonstate.svg"
import useTypeOnVisible from "../hooks/useTypeOnVisible"

const schools = [
  {
    name: "Oregon State University", 
    degreeType: "B.S", 
    degreeMajor: "Computer Science", 
    startingDate: "September 2023", 
    endingDate: "", 
    imagePath: OregonLogo, 
    scale: 75},
]


const Educations = ({gradient}) => {
  const {typedText, ref, isDone} = useTypeOnVisible("Education", 100);
  return (
    <section className="px-2">
      <div ref={ref} className={`mt-20 mb-10 text-5xl text-center ${gradient}`}>{typedText}
        {!isDone && <span className={`text-5xl ${gradient} cursor`}>|</span>}
      </div>

      <div className="px-2 relative">
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-br from-blue-500 to-green-500 -z-1"></div>
        <div className="gradient-border border-2 rounded-xl p-2 space-y-10">
          {schools.map(({name, degreeType, degreeMajor, startingDate, endingDate, imagePath, scale}) => (
            <Education
              name={name}
              degreeType={degreeType}
              degreeMajor={degreeMajor}
              startingDate={startingDate}
              endingDate={endingDate}
              imagePath={imagePath}
              scale={scale}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Educations