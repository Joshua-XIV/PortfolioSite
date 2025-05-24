import { Link } from "react-router-dom"

const NavButton = ({content, isHome = false, isContact = false}) => {
  const path = isHome ? "/" : `/${content.toLowerCase()}`;
  return (
  <Link
    to={isContact ? '#' : path}
    onClick={isContact ? () => window.location = 'mailto:josh.hdz956@yahoo.com' : undefined}
    className="py-3 px-5 hover:bg-white/10 rounded-2xl text-white cursor-pointer"
  >
    {content}
  </Link>
  )
}

export default NavButton