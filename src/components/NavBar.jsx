import NavButton from "./NavButton"

const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-center">
        <div className="bg-indigo-500 w-fit border-2 border-black rounded-2xl">
          <NavButton content="Home"/>
          <NavButton content="Projects"/>
          <NavButton content="About"/>
          <NavButton content="Contact"/>
        </div>
      </nav>
    </>
  )
}

export default NavBar