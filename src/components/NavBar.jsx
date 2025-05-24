import NavButton from "./NavButton"

const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-center mt-8">
        <div className="z-10 fixed flex backdrop-blur-xs w-fit h-fit border-2 border-black rounded-2xl">
          <NavButton content="Home" isHome={true}/>
          <NavButton content="Projects"/>
          <NavButton content="About"/>
          <NavButton content="Contact" isContact={true}/>
        </div>
      </nav>
    </>
  )
}

export default NavBar