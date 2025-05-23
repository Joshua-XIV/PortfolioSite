import { Link } from "react-router-dom"

const NavButton = ({content, isHome = true}) => {
  const path = isHome ? "/" : `/${content.toLowerCase()}`;

  return (
    <Link to={path}>
      <button className="pt-3 pb-3 pl-5 pr-5 hover:bg-gray-500 rounded-2xl text-white">
          {content}
      </button>
    </Link>
  )
}

export default NavButton