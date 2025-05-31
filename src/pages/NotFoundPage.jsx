import { FaExclamationTriangle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="text-center flex flex-col justify-center items-center mt-60">
      <FaExclamationTriangle className="text-yellow-400 text-6xl mb-4"/>
      <h1 className="text-6xl font-bold mb-4 text-white">404 Page Not Found</h1>
      <p className="text-xl mb-5 text-white">This Page Does Not Exist</p>
      <button className="px-3 py-2 mt-4 bg-white rounded-2xl hover:bg-white/80" onClick={() => navigate(-1)}>
        Go Back
      </button>
    </section>
  )
}

export default NotFoundPage