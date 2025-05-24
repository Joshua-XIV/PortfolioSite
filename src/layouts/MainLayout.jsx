import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import BackGround from "../components/BackGround";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <BackGround/>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout