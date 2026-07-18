import { Link } from "react-router-dom"

const NavButton = ({ content, isHome = false, isContact = false }) => {
  const path = isHome ? "/" : `/${content.toLowerCase()}`;
  return (
    <Link
      to={isContact ? '#' : path}
      onClick={isContact ? () => window.location = 'mailto:josh.hdz956@yahoo.com' : undefined}
      className="py-2 px-2.5 sm:py-3 sm:px-5 text-sm sm:text-base text-white cursor-pointer whitespace-nowrap"
    >
      {content}
    </Link>
  )
}

export default NavButton