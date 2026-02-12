import Experience from "./Experience"
import BlackRockLogo from "../assets/BLK.png"
import WayhomeLogo from "../assets/WayhomeImg.jpg"
import useTypeOnVisible  from "../hooks/useTypeOnVisible"

const jobs = [
  {
    company: "BlackRock",
    role: "Software Engineering Intern",
    startDate: "June 2026",
    endDate: "August 2026 (Upcoming)",
    description: [
      "Incoming Software Engineering Intern for Summer 2026",
      "Selected for BlackRock’s competitive internship program focused on building scalable financial technology systems",
      "Will contribute to production-grade software used in global investment and risk management platforms"
    ],
    imagePath: BlackRockLogo,
    scale: 60
  },
  {
    company: "Wayhome",
    role: "Fullstack Software Engineering Intern",
    startDate: "August 2025",
    endDate: "December 2025",
    description: [
      "Cleaned and standardized 50,000+ property location records by building Python/Pandas pipeline to cross-reference Zillow, Census, and Nominatim geospatial data, then migrated validated data from standalone repository into Rails app with PostGIS, eliminating import failures in staging and production",
      "Improved response times by 35% by identifying N+1 queries, adding database indexes, implementing Redis caching, and refactoring high-traffic endpoints serving 100+ daily active users",
      "Built Stripe subscription billing system with idempotency keys and webhook retry logic to prevent duplicate charges, supporting tiered pricing for property owners and renters",
      "Reduced support tickets by 25% by developing AI chatbot using MCP and WebSockets to answer real-time property availability questions, processing 500+ inquiries in first month of deployment"
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
          {jobs.map(({company, role, startDate, endDate, description, imagePath, scale}, idx) => (
            <Experience
              key={idx}
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