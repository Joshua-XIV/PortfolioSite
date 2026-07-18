import useTypeOnVisible from "../hooks/useTypeOnVisible"
import aboutMe from "../data/aboutMe"

const Paragraphs = ({ text }) => {
  const paragraphs = Array.isArray(text) ? text : [text]
  return paragraphs.map((p, idx) => (
    <p key={idx} className={idx < paragraphs.length - 1 ? "pb-4" : ""}>{p}</p>
  ))
}

const AboutMe = ({ gradient, home = true }) => {
  const { typedText, ref, isDone } = useTypeOnVisible("About Me", 100)
  const content = home ? aboutMe.home : aboutMe.about

  return (
    <div className="px-4">
      <div ref={ref} className={`text-5xl ${gradient} text-center`}>
        {typedText}
        {!isDone && <span className={`text-5xl ${gradient} cursor`}>|</span>}
      </div>

      <div className="sm:hidden mt-4 text-[19px] text-indigo-200 px-4">
        <Paragraphs text={content.short} />
      </div>
      <div className="hidden sm:block mt-4 text-[19px] text-indigo-200 px-4">
        <Paragraphs text={content.full} />
      </div>
    </div>
  )
}

export default AboutMe