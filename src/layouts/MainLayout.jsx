import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import BackGround from "../components/BackGround";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollTop";

const gradient = "bg-gradient-to-br from-blue-500 to-green-500 bg-clip-text text-transparent"
const MainLayout = () => {
  return (
    <>
      <BackGround/>
      <ScrollToTop/>
      <NavBar/>
      <Outlet/>
      <Footer 
      gradient={gradient} 
      firstName="Joshua" 
      LastName="Hernandez"
      githubLink="https://github.com/Joshua-XIV"
      linkedInLink="https://www.linkedin.com/in/joshua-hernandez-77306b334/"/>
    </>
  )
}

export default MainLayout