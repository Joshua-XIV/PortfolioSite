import Education from "./Education"
import ACCLogo from "../assets/accLogo.png"
import useTypeOnVisible from "../hooks/useTypeOnVisible"

const schools = [
  {name: "Austin Community College", degreeType: "AS", degreeMajor: "Computer Science", startingDate: "August 2023", endingDate: "May 2025", imagePath: ACCLogo},
  {name: "Some University", degreeType: "B.S", degreeMajor: "Computer Science", startingDate: "May 2025", endingDate: "", imagePath: ""},
]


const Educations = ({gradient}) => {
  const {typedText, ref} = useTypeOnVisible("Education", 100);
  return (
    <section>
      <div ref={ref} className={`mt-20 mb-10 text-5xl text-center ${gradient}`}>{typedText}
        <span className={`${gradient} cursor text-5xl`}>|</span>
      </div>

      <div className="px-2 relative">
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-green-500"></div>
        <div className="border-green-500 border-2 rounded-xl p-2 space-y-10">
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