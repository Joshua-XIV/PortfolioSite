import NavButton from "./NavButton"

const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-center mt-8">
        <div className="fixed flex backdrop-blur-xs w-fit h-fit border-2 border-black rounded-2xl">
          <NavButton content="Home"/>
          <NavButton content="Projects" isHome={false}/>
          <NavButton content="About" isHome={false}/>
          <NavButton content="Contact" isHome={false}/>
        </div>
      </nav>
    </>
  )
}

export default NavBar