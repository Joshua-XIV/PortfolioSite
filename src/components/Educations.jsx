import Education from "./Education"
import ACCLogo from "../assets/accLogo.png"
import useTypeOnVisible from "../hooks/useTypeOnVisible"

const schools = [
  {name: "Austin Community College", degreeType: "AS", degreeMajor: "Computer Science", startingDate: "August 2023", endingDate: "May 2025", imagePath: ACCLogo},
  {name: "Some University", degreeType: "B.S", degreeMajor: "Computer Science", startingDate: "May 2025", endingDate: "", imagePath: ""},
]


const Educations = ({gradient}) => {
  const {typedText, ref, isDone} = useTypeOnVisible("Education", 100);
  return (
    <section>
      <div ref={ref} className={`mt-20 mb-10 text-5xl text-center ${gradient}`}>{typedText}
        {!isDone && <span className={`text-5xl ${gradient} cursor`}>|</span>}
      </div>

      <div className="px-2 relative">
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-br from-blue-500 to-green-500"></div>
        <div className="gradient-border border-2 rounded-xl p-2 space-y-10">
          {schools.map(({name, degreeType, degreeMajor, startingDate, endingDate, imagePath}) => (
            <Education
              name={name}
              degreeType={degreeType}
              degreeMajor={degreeMajor}
              startingDate={startingDate}
              endingDate={endingDate}
              imagePath={imagePath}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Educations