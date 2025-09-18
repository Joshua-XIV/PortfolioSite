import Experience from "./Experience"
import WayhomeLogo from "../assets/WayhomeImg.jpg"
import useTypeOnVisible  from "../hooks/useTypeOnVisible"

const jobs = [
  {
    company: "Wayhome",
    role: "Fullstack Software Engineering Intern",
    startDate: "August 2025",
    endDate: "Present",
    description: [
      "Develop full-stack features using Ruby on Rails, PostgreSQL, and Redis.",
      "Improve deployment pipelines with Git and GitHub Actions, reducing deploy time by 40%.",
      "Refactor locality system to PostGIS with SQL, NoSQL, Python, Docker, and Bash.",
      "Standardize geospatial data handling and ensure 100% successful imports."
    ],
    imagePath: WayhomeLogo,
    scale: 100
  },
]

const Experiences = ({gradient}) => {
  const {typedText, ref, isDone} = useTypeOnVisible("Experience", 100);

  return (
    <section className="px-2">
      <div ref={ref} className={`mt-20 mb-10 text-5xl text-center ${gradient}`}>
        {typedText}
        {!isDone && <span className={`text-5xl ${gradient} cursor`}>|</span>}
      </div>

      <div className="px-2 relative">
        <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-gradient-to-br from-blue-500 to-green-500 -z-1"></div>
        <div className="gradient-border border-2 rounded-xl p-2 space-y-10">
          {jobs.map(({company, role, startDate, endDate, description, imagePath, scale}) => (
            <Experience
              company={company}
              role={role}
              startDate={startDate}
              endDate={endDate}
              description={description}
              imagePath={imagePath}
              scale={scale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;