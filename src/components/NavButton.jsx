import { Link } from "react-router-dom"

const NavButton = ({content, isHome = true}) => {
  const path = isHome ? "/" : `/${content.toLowerCase()}`;

  return (
    <Link to={path} 
    className="py-3 px-5 hover:bg-gray-500/95 rounded-2xl text-white cursor-pointer">
      {content}
    </Link>
  )
}

export default NavButton